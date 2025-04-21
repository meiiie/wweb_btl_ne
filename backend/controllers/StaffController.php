<?php
/**
 * Controller xử lý API giảng viên
 */
class StaffController {
    private $db;
    
    /**
     * Khởi tạo controller
     */
    public function __construct() {
        $this->db = Database::getInstance();
    }
    
    /**
     * Lấy danh sách giảng viên
     */
    public function index(Request $request) {
        // Lấy tham số phân trang
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 10);
        $offset = ($page - 1) * $limit;
        
        // Lấy tham số sắp xếp
        $sortBy = $request->query('sort_by', 'full_name');
        $sortOrder = $request->query('sort_order', 'ASC');
        
        // Lấy tham số lọc
        $department = $request->query('department');
        $search = $request->query('search');
        
        // Xây dựng câu truy vấn
        $query = "
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.is_active = 1
        ";
        
        $countQuery = "
            SELECT COUNT(*) as total
            FROM staff s
            WHERE s.is_active = 1
        ";
        
        $params = [];
        
        // Thêm điều kiện lọc theo bộ môn
        if ($department) {
            $query .= " AND s.department_id = :department_id";
            $countQuery .= " AND s.department_id = :department_id";
            $params[':department_id'] = $department;
        }
        
        // Thêm điều kiện tìm kiếm
        if ($search) {
            $query .= " AND (s.full_name LIKE :search OR s.position LIKE :search OR s.bio LIKE :search)";
            $countQuery .= " AND (s.full_name LIKE :search OR s.position LIKE :search OR s.bio LIKE :search)";
            $params[':search'] = "%{$search}%";
        }
        
        // Thêm sắp xếp
        $query .= " ORDER BY s.{$sortBy} {$sortOrder}";
        
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
        $staffList = $this->db->fetchAll();
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($staffList as &$staff) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($staff['profile_image_url'])) {
                $staff['profile_image_url'] = getDomain() . $staff['profile_image_url'];
            }
            
            // Chuyển đổi các trường JSON thành mảng
            if (!empty($staff['research_interests'])) {
                $staff['research_interests'] = json_decode($staff['research_interests'], true);
            } else {
                $staff['research_interests'] = [];
            }
            
            if (!empty($staff['publications'])) {
                $staff['publications'] = json_decode($staff['publications'], true);
            } else {
                $staff['publications'] = [];
            }
        }
        
        // Tính toán thông tin phân trang
        $totalPages = ceil($total / $limit);
        $hasNextPage = $page < $totalPages;
        $hasPrevPage = $page > 1;
        
        // Trả về kết quả
        Response::success([
            'staff' => $staffList,
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
     * Lấy giảng viên nổi bật
     */
    public function featured(Request $request) {
        // Lấy số lượng giảng viên nổi bật cần lấy
        $limit = (int) $request->query('limit', 5);
        
        // Truy vấn lấy giảng viên nổi bật
        $this->db->query("
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.is_active = 1 AND s.featured = 1
            ORDER BY s.full_name ASC
            LIMIT :limit
        ");
        $this->db->bind(':limit', $limit);
        $staffList = $this->db->fetchAll();
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($staffList as &$staff) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($staff['profile_image_url'])) {
                $staff['profile_image_url'] = getDomain() . $staff['profile_image_url'];
            }
            
            // Chuyển đổi các trường JSON thành mảng
            if (!empty($staff['research_interests'])) {
                $staff['research_interests'] = json_decode($staff['research_interests'], true);
            } else {
                $staff['research_interests'] = [];
            }
        }
        
        // Trả về kết quả
        Response::success($staffList);
    }
    
    /**
     * Lấy danh sách bộ môn
     */
    public function departments() {
        $this->db->query("
            SELECT d.*, COUNT(s.id) as staff_count
            FROM departments d
            LEFT JOIN staff s ON d.id = s.department_id AND s.is_active = 1
            GROUP BY d.id
            ORDER BY d.name
        ");
        $departments = $this->db->fetchAll();
        
        Response::success($departments);
    }
    
    /**
     * Lấy giảng viên theo bộ môn
     */
    public function byDepartment(Request $request) {
        $departmentId = $request->param('id');
        
        // Kiểm tra bộ môn tồn tại
        $this->db->query("SELECT * FROM departments WHERE id = :id");
        $this->db->bind(':id', $departmentId);
        $department = $this->db->fetch();
        
        if (!$department) {
            Response::notFound('Không tìm thấy bộ môn');
        }
        
        // Lấy tham số phân trang
        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 10);
        $offset = ($page - 1) * $limit;
        
        // Truy vấn lấy giảng viên theo bộ môn
        $this->db->query("
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.is_active = 1 AND s.department_id = :department_id
            ORDER BY s.full_name ASC
            LIMIT :offset, :limit
        ");
        $this->db->bind(':department_id', $departmentId);
        $this->db->bind(':offset', $offset);
        $this->db->bind(':limit', $limit);
        $staffList = $this->db->fetchAll();
        
        // Đếm tổng số giảng viên
        $this->db->query("
            SELECT COUNT(*) as total
            FROM staff
            WHERE is_active = 1 AND department_id = :department_id
        ");
        $this->db->bind(':department_id', $departmentId);
        $totalResult = $this->db->fetch();
        $total = $totalResult['total'];
        
        // Xử lý dữ liệu trước khi trả về
        foreach ($staffList as &$staff) {
            // Thêm URL hình ảnh đầy đủ
            if (!empty($staff['profile_image_url'])) {
                $staff['profile_image_url'] = getDomain() . $staff['profile_image_url'];
            }
            
            // Chuyển đổi các trường JSON thành mảng
            if (!empty($staff['research_interests'])) {
                $staff['research_interests'] = json_decode($staff['research_interests'], true);
            } else {
                $staff['research_interests'] = [];
            }
            
            if (!empty($staff['publications'])) {
                $staff['publications'] = json_decode($staff['publications'], true);
            } else {
                $staff['publications'] = [];
            }
        }
        
        // Tính toán thông tin phân trang
        $totalPages = ceil($total / $limit);
        $hasNextPage = $page < $totalPages;
        $hasPrevPage = $page > 1;
        
        // Trả về kết quả
        Response::success([
            'department' => $department,
            'staff' => $staffList,
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
     * Lấy chi tiết giảng viên
     */
    public function show(Request $request) {
        $id = $request->param('id');
        
        // Truy vấn lấy chi tiết giảng viên
        $this->db->query("
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.id = :id AND s.is_active = 1
        ");
        $this->db->bind(':id', $id);
        $staff = $this->db->fetch();
        
        if (!$staff) {
            Response::notFound('Không tìm thấy giảng viên');
        }
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($staff['profile_image_url'])) {
            $staff['profile_image_url'] = getDomain() . $staff['profile_image_url'];
        }
        
        // Chuyển đổi các trường JSON thành mảng
        if (!empty($staff['research_interests'])) {
            $staff['research_interests'] = json_decode($staff['research_interests'], true);
        } else {
            $staff['research_interests'] = [];
        }
        
        if (!empty($staff['publications'])) {
            $staff['publications'] = json_decode($staff['publications'], true);
        } else {
            $staff['publications'] = [];
        }
        
        // Lấy các môn học giảng dạy
        $this->db->query("
            SELECT c.id, c.code, c.name, c.credits
            FROM courses c
            JOIN staff_courses sc ON c.id = sc.course_id
            WHERE sc.staff_id = :staff_id
        ");
        $this->db->bind(':staff_id', $id);
        $courses = $this->db->fetchAll();
        
        // Trả về kết quả
        Response::success([
            'staff' => $staff,
            'courses' => $courses
        ]);
    }
    
    /**
     * Thêm giảng viên mới
     */
    public function store(Request $request) {
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Kiểm tra quyền (chỉ admin mới được thêm giảng viên)
        if ($user['role'] != 'admin') {
            Response::forbidden('Bạn không có quyền thêm giảng viên');
        }
        
        // Validate dữ liệu đầu vào
        $validation = $request->validate([
            'full_name' => 'required|max:150',
            'degree' => 'max:50',
            'position' => 'max:100',
            'department_id' => 'required|integer',
            'email' => 'email|max:100',
            'phone_number' => 'max:20'
        ]);
        
        if ($validation !== true) {
            Response::error('Dữ liệu không hợp lệ', 422, $validation);
        }
        
        // Lấy dữ liệu từ request
        $fullName = $request->input('full_name');
        $degree = $request->input('degree', '');
        $position = $request->input('position', '');
        $departmentId = $request->input('department_id');
        $email = $request->input('email', '');
        $phoneNumber = $request->input('phone_number', '');
        $bio = $request->input('bio', '');
        $researchInterests = $request->input('research_interests', []);
        $publications = $request->input('publications', []);
        $featured = $request->input('featured', 0);
        $isActive = $request->input('is_active', 1);
        
        // Chuyển đổi mảng thành JSON
        $researchInterestsJson = is_array($researchInterests) ? json_encode($researchInterests) : $researchInterests;
        $publicationsJson = is_array($publications) ? json_encode($publications) : $publications;
        
        // Tạo slug từ tên
        $slug = slugify($fullName);
        
        // Xử lý upload hình ảnh profile nếu có
        $profileImageUrl = '';
        if (isset($_FILES['profile_image']) && $_FILES['profile_image']['error'] === UPLOAD_ERR_OK) {
            $uploadResult = uploadFile($_FILES['profile_image'], 'staff');
            
            if ($uploadResult['success']) {
                $profileImageUrl = $uploadResult['file_url'];
            } else {
                Response::error('Không thể upload hình ảnh: ' . $uploadResult['message'], 422);
            }
        } else {
            // Nếu không upload file mới, sử dụng URL từ request (nếu có)
            $profileImageUrl = $request->input('profile_image_url', '');
        }
        
        // Thêm giảng viên vào database
        $this->db->query("
            INSERT INTO staff (full_name, slug, degree, position, department_id, email, phone_number, bio, research_interests, publications, profile_image_url, featured, is_active)
            VALUES (:full_name, :slug, :degree, :position, :department_id, :email, :phone_number, :bio, :research_interests, :publications, :profile_image_url, :featured, :is_active)
        ");
        
        $this->db->bind(':full_name', $fullName);
        $this->db->bind(':slug', $slug);
        $this->db->bind(':degree', $degree);
        $this->db->bind(':position', $position);
        $this->db->bind(':department_id', $departmentId);
        $this->db->bind(':email', $email);
        $this->db->bind(':phone_number', $phoneNumber);
        $this->db->bind(':bio', $bio);
        $this->db->bind(':research_interests', $researchInterestsJson);
        $this->db->bind(':publications', $publicationsJson);
        $this->db->bind(':profile_image_url', $profileImageUrl);
        $this->db->bind(':featured', $featured);
        $this->db->bind(':is_active', $isActive);
        
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể thêm giảng viên', 500);
        }
        
        $staffId = $this->db->lastInsertId();
        
        // Lấy thông tin giảng viên vừa thêm
        $this->db->query("
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.id = :id
        ");
        $this->db->bind(':id', $staffId);
        $staff = $this->db->fetch();
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($staff['profile_image_url'])) {
            $staff['profile_image_url'] = getDomain() . $staff['profile_image_url'];
        }
        
        // Chuyển đổi các trường JSON thành mảng
        if (!empty($staff['research_interests'])) {
            $staff['research_interests'] = json_decode($staff['research_interests'], true);
        } else {
            $staff['research_interests'] = [];
        }
        
        if (!empty($staff['publications'])) {
            $staff['publications'] = json_decode($staff['publications'], true);
        } else {
            $staff['publications'] = [];
        }
        
        // Trả về kết quả
        Response::created($staff, 'Thêm giảng viên thành công');
    }
    
    /**
     * Cập nhật giảng viên
     */
    public function update(Request $request) {
        $id = $request->param('id');
        
        // Kiểm tra giảng viên tồn tại
        $this->db->query("SELECT * FROM staff WHERE id = :id");
        $this->db->bind(':id', $id);
        $staff = $this->db->fetch();
        
        if (!$staff) {
            Response::notFound('Không tìm thấy giảng viên');
        }
        
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Kiểm tra quyền (chỉ admin mới được cập nhật giảng viên)
        if ($user['role'] != 'admin') {
            Response::forbidden('Bạn không có quyền cập nhật giảng viên');
        }
        
        // Validate dữ liệu đầu vào
        $validation = $request->validate([
            'full_name' => 'max:150',
            'degree' => 'max:50',
            'position' => 'max:100',
            'department_id' => 'integer',
            'email' => 'email|max:100',
            'phone_number' => 'max:20'
        ]);
        
        if ($validation !== true) {
            Response::error('Dữ liệu không hợp lệ', 422, $validation);
        }
        
        // Lấy dữ liệu từ request
        $fullName = $request->input('full_name', $staff['full_name']);
        $degree = $request->input('degree', $staff['degree']);
        $position = $request->input('position', $staff['position']);
        $departmentId = $request->input('department_id', $staff['department_id']);
        $email = $request->input('email', $staff['email']);
        $phoneNumber = $request->input('phone_number', $staff['phone_number']);
        $bio = $request->input('bio', $staff['bio']);
        $researchInterests = $request->input('research_interests', json_decode($staff['research_interests'], true) ?: []);
        $publications = $request->input('publications', json_decode($staff['publications'], true) ?: []);
        $featured = $request->input('featured', $staff['featured']);
        $isActive = $request->input('is_active', $staff['is_active']);
        
        // Chuyển đổi mảng thành JSON
        $researchInterestsJson = is_array($researchInterests) ? json_encode($researchInterests) : $researchInterests;
        $publicationsJson = is_array($publications) ? json_encode($publications) : $publications;
        
        // Tạo slug mới nếu tên thay đổi
        $slug = $staff['slug'];
        if ($fullName != $staff['full_name']) {
            $slug = slugify($fullName);
        }
        
        // Xử lý upload hình ảnh profile nếu có
        $profileImageUrl = $staff['profile_image_url'];
        if (isset($_FILES['profile_image']) && $_FILES['profile_image']['error'] === UPLOAD_ERR_OK) {
            $uploadResult = uploadFile($_FILES['profile_image'], 'staff');
            
            if ($uploadResult['success']) {
                // Xóa hình ảnh cũ nếu có
                if (!empty($staff['profile_image_url'])) {
                    $oldImagePath = str_replace(getDomain(), '', $staff['profile_image_url']);
                    deleteFile(__DIR__ . '/../..' . $oldImagePath);
                }
                
                $profileImageUrl = $uploadResult['file_url'];
            } else {
                Response::error('Không thể upload hình ảnh: ' . $uploadResult['message'], 422);
            }
        } else {
            // Nếu không upload file mới, sử dụng URL từ request (nếu có)
            $profileImageUrl = $request->input('profile_image_url', $profileImageUrl);
        }
        
        // Cập nhật giảng viên trong database
        $this->db->query("
            UPDATE staff
            SET full_name = :full_name, slug = :slug, degree = :degree, position = :position, 
                department_id = :department_id, email = :email, phone_number = :phone_number, 
                bio = :bio, research_interests = :research_interests, publications = :publications, 
                profile_image_url = :profile_image_url, featured = :featured, is_active = :is_active
            WHERE id = :id
        ");
        
        $this->db->bind(':full_name', $fullName);
        $this->db->bind(':slug', $slug);
        $this->db->bind(':degree', $degree);
        $this->db->bind(':position', $position);
        $this->db->bind(':department_id', $departmentId);
        $this->db->bind(':email', $email);
        $this->db->bind(':phone_number', $phoneNumber);
        $this->db->bind(':bio', $bio);
        $this->db->bind(':research_interests', $researchInterestsJson);
        $this->db->bind(':publications', $publicationsJson);
        $this->db->bind(':profile_image_url', $profileImageUrl);
        $this->db->bind(':featured', $featured);
        $this->db->bind(':is_active', $isActive);
        $this->db->bind(':id', $id);
        
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể cập nhật giảng viên', 500);
        }
        
        // Lấy thông tin giảng viên sau khi cập nhật
        $this->db->query("
            SELECT s.*, d.name as department_name
            FROM staff s
            LEFT JOIN departments d ON s.department_id = d.id
            WHERE s.id = :id
        ");
        $this->db->bind(':id', $id);
        $updatedStaff = $this->db->fetch();
        
        // Thêm URL hình ảnh đầy đủ
        if (!empty($updatedStaff['profile_image_url'])) {
            $updatedStaff['profile_image_url'] = getDomain() . $updatedStaff['profile_image_url'];
        }
        
        // Chuyển đổi các trường JSON thành mảng
        if (!empty($updatedStaff['research_interests'])) {
            $updatedStaff['research_interests'] = json_decode($updatedStaff['research_interests'], true);
        } else {
            $updatedStaff['research_interests'] = [];
        }
        
        if (!empty($updatedStaff['publications'])) {
            $updatedStaff['publications'] = json_decode($updatedStaff['publications'], true);
        } else {
            $updatedStaff['publications'] = [];
        }
        
        // Trả về kết quả
        Response::success($updatedStaff, 'Cập nhật giảng viên thành công');
    }
    
    /**
     * Xóa giảng viên
     */
    public function delete(Request $request) {
        $id = $request->param('id');
        
        // Kiểm tra giảng viên tồn tại
        $this->db->query("SELECT * FROM staff WHERE id = :id");
        $this->db->bind(':id', $id);
        $staff = $this->db->fetch();
        
        if (!$staff) {
            Response::notFound('Không tìm thấy giảng viên');
        }
        
        // Lấy thông tin người dùng hiện tại
        $auth = new Auth();
        $user = $auth->user();
        
        // Kiểm tra quyền (chỉ admin mới được xóa giảng viên)
        if ($user['role'] != 'admin') {
            Response::forbidden('Bạn không có quyền xóa giảng viên');
        }
        
        // Xóa hình ảnh profile nếu có
        if (!empty($staff['profile_image_url'])) {
            $imagePath = str_replace(getDomain(), '', $staff['profile_image_url']);
            deleteFile(__DIR__ . '/../..' . $imagePath);
        }
        
        // Xóa giảng viên khỏi database
        $this->db->query("DELETE FROM staff WHERE id = :id");
        $this->db->bind(':id', $id);
        $success = $this->db->execute();
        
        if (!$success) {
            Response::error('Không thể xóa giảng viên', 500);
        }
        
        // Trả về kết quả
        Response::success(null, 'Xóa giảng viên thành công');
    }
}
