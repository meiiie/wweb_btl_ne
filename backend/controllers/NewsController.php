<?php
/**
 * Controller xử lý API tin tức
 */
class NewsController {
    private $db;
    
    /**
     * Khởi tạo controller
     */
    public function __construct() {
        $this->db = Database::getInstance();
    }
    
    /**
     * Lấy danh sách tin tức
     */
    public function index(Request $request) {
        // Lấy tham số phân trang
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 10);
        $offset = ($page - 1) * $limit;
        
        // Lấy tham số sắp xếp
        $sortBy = $request->query('sort_by', 'published_at');
        $sortOrder = $request->query('sort_order', 'DESC');
        
        // Lấy tham số lọc
        $category = $request->query('category');
        $search = $request->query('search');
        
        // Xây dựng câu truy vấn
        $query = "
            SELECT a.*, c.name as category_name, u.full_name as author_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            LEFT JOIN users u ON a.author_id = u.id
            WHERE a.status = 'published'
        ";
        
        $countQuery = "
            SELECT COUNT(*) as total
            FROM articles a
            WHERE a.status = 'published'
        ";
        
        $params = [];
        
        // Thêm điều kiện lọc theo danh mục
        if ($category) {
            $query .= " AND a.category_id = :category_id";
            $countQuery .= " AND a.category_id = :category_id";
            $params[':category_id'] = $category;
        }
        
        // Thêm điều kiện tìm kiếm
        if ($search) {
            $query .= " AND (a.title LIKE :search OR a.content LIKE :search)";
            $countQuery .= " AND (a.title LIKE :search OR a.content LIKE :search)";
            $params[':search'] = "%{$search}%";
        }
        
        // Thêm sắp xếp
        $query .= " ORDER BY a.{$sortBy} {$sortOrder}";
        
        // Thêm phân trang
        $query .= " LIMIT :offset, :limit";
        $params[':offset'] = $offset;
        $params[':limit'] = $limit;
        
        // Thực thi truy vấn đếm tổng số
        $this->db->query($countQuery);
        foreach ($params as $key => $value) {
            if ($key !== ':offset' && $key !== ':limit') {
                $this->db->bind($key, $value);
            }
        }
        $totalResult = $this->db->fetch();
        $total = $totalResult['total'];
        
        // Thực thi truy vấn lấy dữ liệu
        $this->db->query($query);
        foreach ($params as $key => $value) {
            $this->db->bind($key, $value);
        }
        $articles = $this->db->fetchAll();
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($articles as &$article) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($article['thumbnail_url'])) {
                $article['thumbnail_url'] = getDomain() . $article['thumbnail_url'];
            }
            
            // Định dạng ngày tháng
            $article['published_at'] = formatDate($article['published_at'], 'd/m/Y H:i');
            $article['created_at'] = formatDate($article['created_at'], 'd/m/Y H:i');
            $article['updated_at'] = formatDate($article['updated_at'], 'd/m/Y H:i');
            
            // Rút gọn nội dung
            $article['content'] = truncate(strip_tags($article['content']), 200);
        }
        
        // Tính toán thông tin phân trang
        $totalPages = ceil($total / $limit);
        $hasNextPage = $page < $totalPages;
        $hasPrevPage = $page > 1;
        
        // Trả về kết quả
        Response::success([
            'articles' => $articles,
            'pagination' => [
                'total' => $total,
                'per_page' => $limit,
                'current_page' => $page,
                'last_page' => $totalPages,
                'from' => $offset + 1,
                'to' => min($offset + $limit, $total),
                'has_next_page' => $hasNextPage,
                'has_prev_page' => $hasPrevPage
            ]
        ]);
    }
    
    /**
     * Lấy tin tức nổi bật
     */
    public function featured(Request $request) {
        // Lấy số lượng tin nổi bật cần lấy
        $limit = (int) $request->query('limit', 5);
        
        // Truy vấn lấy tin nổi bật
        $this->db->query("
            SELECT a.*, c.name as category_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            WHERE a.status = 'published' AND a.is_featured = 1
            ORDER BY a.published_at DESC
            LIMIT :limit
        ");
        $this->db->bind(':limit', $limit);
        $articles = $this->db->fetchAll();
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($articles as &$article) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($article['thumbnail_url'])) {
                $article['thumbnail_url'] = getDomain() . $article['thumbnail_url'];
            }
            
            // Định dạng ngày tháng
            $article['published_at'] = formatDate($article['published_at'], 'd/m/Y H:i');
            
            // Rút gọn nội dung
            $article['content'] = truncate(strip_tags($article['content']), 200);
        }
        
        // Trả về kết quả
        Response::success($articles);
    }
    
    /**
     * Lấy danh sách danh mục tin tức
     */
    public function categories() {
        $this->db->query("
            SELECT c.*, COUNT(a.id) as article_count
            FROM article_categories c
            LEFT JOIN articles a ON c.id = a.category_id AND a.status = 'published'
            GROUP BY c.id
            ORDER BY c.name
        ");
        $categories = $this->db->fetchAll();
        
        Response::success($categories);
    }
    
    /**
     * Lấy tin tức theo danh mục
     */
    public function byCategory(Request $request) {
        $categoryId = $request->param('id');
        
        // Kiểm tra danh mục tồn tại
        $this->db->query("SELECT * FROM article_categories WHERE id = :id");
        $this->db->bind(':id', $categoryId);
        $category = $this->db->fetch();
        
        if (!$category) {
            Response::notFound('Không tìm thấy danh mục');
        }
        
        // Lấy tham số phân trang
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 10);
        $offset = ($page - 1) * $limit;
        
        // Truy vấn lấy tin tức theo danh mục
        $this->db->query("
            SELECT a.*, c.name as category_name, u.full_name as author_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            LEFT JOIN users u ON a.author_id = u.id
            WHERE a.status = 'published' AND a.category_id = :category_id
            ORDER BY a.published_at DESC
            LIMIT :offset, :limit
        ");
        $this->db->bind(':category_id', $categoryId);
        $this->db->bind(':offset', $offset);
        $this->db->bind(':limit', $limit);
        $articles = $this->db->fetchAll();
        
        // Đếm tổng số tin tức
        $this->db->query("
            SELECT COUNT(*) as total
            FROM articles
            WHERE status = 'published' AND category_id = :category_id
        ");
        $this->db->bind(':category_id', $categoryId);
        $totalResult = $this->db->fetch();
        $total = $totalResult['total'];
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($articles as &$article) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($article['thumbnail_url'])) {
                $article['thumbnail_url'] = getDomain() . $article['thumbnail_url'];
            }
            
            // Định dạng ngày tháng
            $article['published_at'] = formatDate($article['published_at'], 'd/m/Y H:i');
            $article['created_at'] = formatDate($article['created_at'], 'd/m/Y H:i');
            $article['updated_at'] = formatDate($article['updated_at'], 'd/m/Y H:i');
            
            // Rút gọn nội dung
            $article['content'] = truncate(strip_tags($article['content']), 200);
        }
        
        // Tính toán thông tin phân trang
        $totalPages = ceil($total / $limit);
        $hasNextPage = $page < $totalPages;
        $hasPrevPage = $page > 1;
        
        // Trả về kết quả
        Response::success([
            'category' => $category,
            'articles' => $articles,
            'pagination' => [
                'total' => $total,
                'per_page' => $limit,
                'current_page' => $page,
                'last_page' => $totalPages,
                'from' => $offset + 1,
                'to' => min($offset + $limit, $total),
                'has_next_page' => $hasNextPage,
                'has_prev_page' => $hasPrevPage
            ]
        ]);
    }
    
    /**
     * Lấy chi tiết tin tức
     */
    public function show(Request $request) {
        $id = $request->param('id');
        
        // Truy vấn lấy chi tiết tin tức
        $this->db->query("
            SELECT a.*, c.name as category_name, u.full_name as author_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            LEFT JOIN users u ON a.author_id = u.id
            WHERE a.id = :id AND a.status = 'published'
        ");
        $this->db->bind(':id', $id);
        $article = $this->db->fetch();
        
        if (!$article) {
            Response::notFound('Không tìm thấy tin tức');
        }
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($article['thumbnail_url'])) {
            $article['thumbnail_url'] = getDomain() . $article['thumbnail_url'];
        }
        
        // Định dạng ngày tháng
        $article['published_at'] = formatDate($article['published_at'], 'd/m/Y H:i');
        $article['created_at'] = formatDate($article['created_at'], 'd/m/Y H:i');
        $article['updated_at'] = formatDate($article['updated_at'], 'd/m/Y H:i');
        
        // Lấy các tin tức liên quan
        $this->db->query("
            SELECT a.id, a.title, a.slug, a.thumbnail_url, a.published_at
            FROM articles a
            WHERE a.category_id = :category_id AND a.id != :id AND a.status = 'published'
            ORDER BY a.published_at DESC
            LIMIT 5
        ");
        $this->db->bind(':category_id', $article['category_id']);
        $this->db->bind(':id', $id);
        $relatedArticles = $this->db->fetchAll();
        
        // Xử lý dữ liệu tin tức liên quan
        foreach ($relatedArticles as &$relatedArticle) {
            if (!empty($relatedArticle['thumbnail_url'])) {
                $relatedArticle['thumbnail_url'] = getDomain() . $relatedArticle['thumbnail_url'];
            }
            $relatedArticle['published_at'] = formatDate($relatedArticle['published_at'], 'd/m/Y');
        }
        
        // Cập nhật lượt xem
        $this->db->query("UPDATE articles SET views = views + 1 WHERE id = :id");
        $this->db->bind(':id', $id);
        $this->db->execute();
        
        // Trả về kết quả
        Response::success([
            'article' => $article,
            'related_articles' => $relatedArticles
        ]);
    }
    
    /**
     * Thêm tin tức mới
     */
    public function store(Request $request) {
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Validate dữ liệu đầu vào
        $validation = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'category_id' => 'required|integer',
            'excerpt' => 'max:500',
            'status' => 'in:published,draft,archived'
        ]);
        
        if ($validation !== true) {
            Response::error('Dữ liệu không hợp lệ', 422, $validation);
        }
        
        // Lấy dữ liệu từ request
        $title = $request->input('title');
        $content = $request->input('content');
        $categoryId = $request->input('category_id');
        $excerpt = $request->input('excerpt', '');
        $status = $request->input('status', 'published');
        $isFeatured = $request->input('is_featured', 0);
        $publishedAt = $request->input('published_at', now());
        
        // Tạo slug
        $slug = slugify($title);
        
        // Kiểm tra slug đã tồn tại chưa
        $this->db->query("SELECT id FROM articles WHERE slug = :slug");
        $this->db->bind(':slug', $slug);
        $existingArticle = $this->db->fetch();
        
        if ($existingArticle) {
            // Nếu slug đã tồn tại, thêm một chuỗi ngẫu nhiên vào slug
            $slug = $slug . '-' . randomString(5);
        }
        
        // Xử lý upload hình ảnh thumbnail nếu có
        $thumbnailUrl = '';
        if (isset($_FILES['thumbnail']) && $_FILES['thumbnail']['error'] === UPLOAD_ERR_OK) {
            $uploadResult = uploadFile($_FILES['thumbnail'], 'articles');
            
            if ($uploadResult['success']) {
                $thumbnailUrl = $uploadResult['file_url'];
            } else {
                Response::error('Không thể upload hình ảnh: ' . $uploadResult['message'], 422);
            }
        } else {
            // Nếu không upload file mới, sử dụng URL từ request (nếu có)
            $thumbnailUrl = $request->input('thumbnail_url', '');
        }
        
        // Thêm tin tức vào database
        $this->db->query("
            INSERT INTO articles (title, slug, content, excerpt, category_id, author_id, thumbnail_url, status, is_featured, published_at, created_at, updated_at)
            VALUES (:title, :slug, :content, :excerpt, :category_id, :author_id, :thumbnail_url, :status, :is_featured, :published_at, NOW(), NOW())
        ");
        
        $this->db->bind(':title', $title);
        $this->db->bind(':slug', $slug);
        $this->db->bind(':content', $content);
        $this->db->bind(':excerpt', $excerpt);
        $this->db->bind(':category_id', $categoryId);
        $this->db->bind(':author_id', $user['id']);
        $this->db->bind(':thumbnail_url', $thumbnailUrl);
        $this->db->bind(':status', $status);
        $this->db->bind(':is_featured', $isFeatured);
        $this->db->bind(':published_at', $publishedAt);
        
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể thêm tin tức', 500);
        }
        
        $articleId = $this->db->lastInsertId();
        
        // Lấy thông tin tin tức vừa thêm
        $this->db->query("
            SELECT a.*, c.name as category_name, u.full_name as author_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            LEFT JOIN users u ON a.author_id = u.id
            WHERE a.id = :id
        ");
        $this->db->bind(':id', $articleId);
        $article = $this->db->fetch();
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($article['thumbnail_url'])) {
            $article['thumbnail_url'] = getDomain() . $article['thumbnail_url'];
        }
        
        // Định dạng ngày tháng
        $article['published_at'] = formatDate($article['published_at'], 'd/m/Y H:i');
        $article['created_at'] = formatDate($article['created_at'], 'd/m/Y H:i');
        $article['updated_at'] = formatDate($article['updated_at'], 'd/m/Y H:i');
        
        // Trả về kết quả
        Response::created($article, 'Thêm tin tức thành công');
    }
    
    /**
     * Cập nhật tin tức
     */
    public function update(Request $request) {
        $id = $request->param('id');
        
        // Kiểm tra tin tức tồn tại
        $this->db->query("SELECT * FROM articles WHERE id = :id");
        $this->db->bind(':id', $id);
        $article = $this->db->fetch();
        
        if (!$article) {
            Response::notFound('Không tìm thấy tin tức');
        }
        
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Kiểm tra quyền (chỉ tác giả hoặc admin mới được cập nhật)
        if ($article['author_id'] != $user['id'] && $user['role'] != 'admin') {
            Response::forbidden('Bạn không có quyền cập nhật tin tức này');
        }
        
        // Validate dữ liệu đầu vào
        $validation = $request->validate([
            'title' => 'max:255',
            'category_id' => 'integer',
            'excerpt' => 'max:500',
            'status' => 'in:published,draft,archived'
        ]);
        
        if ($validation !== true) {
            Response::error('Dữ liệu không hợp lệ', 422, $validation);
        }
        
        // Lấy dữ liệu từ request
        $title = $request->input('title', $article['title']);
        $content = $request->input('content', $article['content']);
        $categoryId = $request->input('category_id', $article['category_id']);
        $excerpt = $request->input('excerpt', $article['excerpt']);
        $status = $request->input('status', $article['status']);
        $isFeatured = $request->input('is_featured', $article['is_featured']);
        $publishedAt = $request->input('published_at', $article['published_at']);
        
        // Tạo slug mới nếu tiêu đề thay đổi
        $slug = $article['slug'];
        if ($title != $article['title']) {
            $slug = slugify($title);
            
            // Kiểm tra slug đã tồn tại chưa (trừ tin tức hiện tại)
            $this->db->query("SELECT id FROM articles WHERE slug = :slug AND id != :id");
            $this->db->bind(':slug', $slug);
            $this->db->bind(':id', $id);
            $existingArticle = $this->db->fetch();
            
            if ($existingArticle) {
                // Nếu slug đã tồn tại, thêm một chuỗi ngẫu nhiên vào slug
                $slug = $slug . '-' . randomString(5);
            }
        }
        
        // Xử lý upload hình ảnh thumbnail nếu có
        $thumbnailUrl = $article['thumbnail_url'];
        if (isset($_FILES['thumbnail']) && $_FILES['thumbnail']['error'] === UPLOAD_ERR_OK) {
            $uploadResult = uploadFile($_FILES['thumbnail'], 'articles');
            
            if ($uploadResult['success']) {
                // Xóa hình ảnh cũ nếu có
                if (!empty($article['thumbnail_url'])) {
                    $oldThumbnailPath = str_replace(getDomain(), '', $article['thumbnail_url']);
                    deleteFile(__DIR__ . '/../..' . $oldThumbnailPath);
                }
                
                $thumbnailUrl = $uploadResult['file_url'];
            } else {
                Response::error('Không thể upload hình ảnh: ' . $uploadResult['message'], 422);
            }
        } else {
            // Nếu không upload file mới, sử dụng URL từ request (nếu có)
            $thumbnailUrl = $request->input('thumbnail_url', $thumbnailUrl);
        }
        
        // Cập nhật tin tức trong database
        $this->db->query("
            UPDATE articles
            SET title = :title, slug = :slug, content = :content, excerpt = :excerpt, 
                category_id = :category_id, thumbnail_url = :thumbnail_url, 
                status = :status, is_featured = :is_featured, 
                published_at = :published_at, updated_at = NOW()
            WHERE id = :id
        ");
        
        $this->db->bind(':title', $title);
        $this->db->bind(':slug', $slug);
        $this->db->bind(':content', $content);
        $this->db->bind(':excerpt', $excerpt);
        $this->db->bind(':category_id', $categoryId);
        $this->db->bind(':thumbnail_url', $thumbnailUrl);
        $this->db->bind(':status', $status);
        $this->db->bind(':is_featured', $isFeatured);
        $this->db->bind(':published_at', $publishedAt);
        $this->db->bind(':id', $id);
        
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể cập nhật tin tức', 500);
        }
        
        // Lấy thông tin tin tức sau khi cập nhật
        $this->db->query("
            SELECT a.*, c.name as category_name, u.full_name as author_name
            FROM articles a
            LEFT JOIN article_categories c ON a.category_id = c.id
            LEFT JOIN users u ON a.author_id = u.id
            WHERE a.id = :id
        ");
        $this->db->bind(':id', $id);
        $updatedArticle = $this->db->fetch();
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($updatedArticle['thumbnail_url'])) {
            $updatedArticle['thumbnail_url'] = getDomain() . $updatedArticle['thumbnail_url'];
        }
        
        // Định dạng ngày tháng
        $updatedArticle['published_at'] = formatDate($updatedArticle['published_at'], 'd/m/Y H:i');
        $updatedArticle['created_at'] = formatDate($updatedArticle['created_at'], 'd/m/Y H:i');
        $updatedArticle['updated_at'] = formatDate($updatedArticle['updated_at'], 'd/m/Y H:i');
        
        // Trả về kết quả
        Response::success($updatedArticle, 'Cập nhật tin tức thành công');
    }
    
    /**
     * Xóa tin tức
     */
    public function delete(Request $request) {
        $id = $request->param('id');
        
        // Kiểm tra tin tức tồn tại
        $this->db->query("SELECT * FROM articles WHERE id = :id");
        $this->db->bind(':id', $id);
        $article = $this->db->fetch();
        
        if (!$article) {
            Response::notFound('Không tìm thấy tin tức');
        }
        
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Kiểm tra quyền (chỉ tác giả hoặc admin mới được xóa)
        if ($article['author_id'] != $user['id'] && $user['role'] != 'admin') {
            Response::forbidden('Bạn không có quyền xóa tin tức này');
        }
        
        // Xóa hình ảnh thumbnail nếu có
        if (!empty($article['thumbnail_url'])) {
            $thumbnailPath = str_replace(getDomain(), '', $article['thumbnail_url']);
            deleteFile(__DIR__ . '/../..' . $thumbnailPath);
        }
        
        // Xóa tin tức khỏi database
        $this->db->query("DELETE FROM articles WHERE id = :id");
        $this->db->bind(':id', $id);
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể xóa tin tức', 500);
        }
        
        // Trả về kết quả
        Response::success(null, 'Xóa tin tức thành công');
    }
}
