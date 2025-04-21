<?php
/**
 * Lớp Router - Xử lý định tuyến
 */
class Router {
    private $routes = [
        'GET' => [],
        'POST' => [],
        'PUT' => [],
        'DELETE' => []
    ];
    
    /**
     * Đăng ký route GET
     */
    public function get($path, $handler, $requireAuth = false) {
        $this->addRoute('GET', $path, $handler, $requireAuth);
    }
    
    /**
     * Đăng ký route POST
     */
    public function post($path, $handler, $requireAuth = false) {
        $this->addRoute('POST', $path, $handler, $requireAuth);
    }
    
    /**
     * Đăng ký route PUT
     */
    public function put($path, $handler, $requireAuth = false) {
        $this->addRoute('PUT', $path, $handler, $requireAuth);
    }
    
    /**
     * Đăng ký route DELETE
     */
    public function delete($path, $handler, $requireAuth = false) {
        $this->addRoute('DELETE', $path, $handler, $requireAuth);
    }
    
    /**
     * Thêm route vào danh sách
     */
    private function addRoute($method, $path, $handler, $requireAuth) {
        // Chuyển đổi tham số động trong URL thành regex pattern
        $pattern = $this->convertPathToRegex($path);
        
        $this->routes[$method][$pattern] = [
            'handler' => $handler,
            'requireAuth' => $requireAuth
        ];
    }
    
    /**
     * Chuyển đổi path thành regex pattern
     */
    private function convertPathToRegex($path) {
        // Thay thế các tham số động {param} thành regex pattern
        return preg_replace('/\{([a-zA-Z0-9_]+)\}/', '(?P<$1>[^/]+)', $path);
    }
    
    /**
     * Xử lý request
     */
    public function resolve() {
        // Xử lý CORS cho OPTIONS request
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            exit();
        }
        
        // Lấy method và path từ request
        $method = $_SERVER['REQUEST_METHOD'];
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        // Loại bỏ tiền tố đường dẫn nếu cần
        // Ví dụ: /api/v1/news -> /news
        $basePath = '/api';
        if (strpos($path, $basePath) === 0) {
            $path = substr($path, strlen($basePath));
        }
        
        // Nếu path rỗng, đặt thành '/'
        if (empty($path)) {
            $path = '/';
        }
        
        // Tìm route phù hợp
        foreach ($this->routes[$method] as $pattern => $route) {
            if (preg_match('#^' . $pattern . '$#', $path, $matches)) {
                // Lọc các tham số
                $params = array_filter($matches, function($key) {
                    return !is_numeric($key);
                }, ARRAY_FILTER_USE_KEY);
                
                // Kiểm tra xác thực nếu cần
                if ($route['requireAuth']) {
                    $auth = new Auth();
                    if (!$auth->check()) {
                        Response::unauthorized('Bạn cần đăng nhập để thực hiện hành động này');
                    }
                }
                
                // Tạo đối tượng Request
                $request = new Request();
                $request->setParams($params);
                
                // Phân tích handler
                $handlerParts = explode('@', $route['handler']);
                $controllerName = $handlerParts[0];
                $methodName = $handlerParts[1];
                
                // Tạo đường dẫn đến file controller
                $controllerFile = __DIR__ . '/../controllers/' . $controllerName . '.php';
                
                // Kiểm tra file controller tồn tại
                if (!file_exists($controllerFile)) {
                    Response::error('Controller không tồn tại: ' . $controllerName, 500);
                }
                
                // Include file controller
                require_once $controllerFile;
                
                // Tạo đối tượng controller
                $controller = new $controllerName();
                
                // Kiểm tra method tồn tại
                if (!method_exists($controller, $methodName)) {
                    Response::error('Method không tồn tại: ' . $methodName, 500);
                }
                
                // Gọi method của controller
                return $controller->$methodName($request);
            }
        }
        
        // Không tìm thấy route
        Response::notFound('Không tìm thấy endpoint API');
    }
}
