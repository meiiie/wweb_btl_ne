<?php
/**
 * Lớp Request - Xử lý yêu cầu HTTP
 */
class Request {
    private $params;
    private $queryParams;
    private $body;
    private $method;
    private $contentType;
    private $headers;
    
    /**
     * Khởi tạo Request
     */
    public function __construct() {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->contentType = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';
        $this->headers = $this->getHeaders();
        
        // Lấy query parameters từ URL
        $this->queryParams = $_GET;
        
        // Lấy route parameters (sẽ được thiết lập bởi Router)
        $this->params = [];
        
        // Lấy body của request
        $this->body = $this->parseBody();
    }
    
    /**
     * Lấy tất cả headers
     */
    private function getHeaders() {
        $headers = [];
        
        if (function_exists('getallheaders')) {
            $headers = getallheaders();
        } else {
            foreach ($_SERVER as $name => $value) {
                if (substr($name, 0, 5) == 'HTTP_') {
                    $name = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))));
                    $headers[$name] = $value;
                }
            }
        }
        
        return $headers;
    }
    
    /**
     * Phân tích body của request
     */
    private function parseBody() {
        $body = [];
        
        if ($this->method === 'GET') {
            return $body;
        }
        
        // Xử lý JSON
        if (strpos($this->contentType, 'application/json') !== false) {
            $input = file_get_contents('php://input');
            $body = json_decode($input, true);
        } 
        // Xử lý form data
        else if (strpos($this->contentType, 'application/x-www-form-urlencoded') !== false) {
            $body = $_POST;
        }
        // Xử lý multipart form data (có file upload)
        else if (strpos($this->contentType, 'multipart/form-data') !== false) {
            $body = $_POST;
        }
        
        return $body ?? [];
    }
    
    /**
     * Thiết lập route parameters
     */
    public function setParams($params) {
        $this->params = $params;
        return $this;
    }
    
    /**
     * Lấy giá trị từ route parameters
     */
    public function param($key, $default = null) {
        return $this->params[$key] ?? $default;
    }
    
    /**
     * Lấy giá trị từ query parameters
     */
    public function query($key, $default = null) {
        return $this->queryParams[$key] ?? $default;
    }
    
    /**
     * Lấy giá trị từ body
     */
    public function input($key, $default = null) {
        return $this->body[$key] ?? $default;
    }
    
    /**
     * Lấy toàn bộ body
     */
    public function all() {
        return $this->body;
    }
    
    /**
     * Lấy phương thức HTTP
     */
    public function method() {
        return $this->method;
    }
    
    /**
     * Lấy giá trị header
     */
    public function header($key, $default = null) {
        return $this->headers[$key] ?? $default;
    }
    
    /**
     * Kiểm tra có phải phương thức GET
     */
    public function isGet() {
        return $this->method === 'GET';
    }
    
    /**
     * Kiểm tra có phải phương thức POST
     */
    public function isPost() {
        return $this->method === 'POST';
    }
    
    /**
     * Kiểm tra có phải phương thức PUT
     */
    public function isPut() {
        return $this->method === 'PUT';
    }
    
    /**
     * Kiểm tra có phải phương thức DELETE
     */
    public function isDelete() {
        return $this->method === 'DELETE';
    }
    
    /**
     * Validate dữ liệu đầu vào
     */
    public function validate($rules) {
        $errors = [];
        
        foreach ($rules as $field => $rule) {
            $value = $this->input($field);
            $ruleArray = explode('|', $rule);
            
            foreach ($ruleArray as $singleRule) {
                // Tách rule và tham số (nếu có)
                $ruleParts = explode(':', $singleRule);
                $ruleName = $ruleParts[0];
                $ruleParam = $ruleParts[1] ?? null;
                
                // Kiểm tra các rule
                switch ($ruleName) {
                    case 'required':
                        if ($value === null || $value === '') {
                            $errors[$field][] = "Trường $field là bắt buộc";
                        }
                        break;
                        
                    case 'email':
                        if ($value !== null && $value !== '' && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                            $errors[$field][] = "Trường $field phải là email hợp lệ";
                        }
                        break;
                        
                    case 'min':
                        if ($value !== null && strlen($value) < $ruleParam) {
                            $errors[$field][] = "Trường $field phải có ít nhất $ruleParam ký tự";
                        }
                        break;
                        
                    case 'max':
                        if ($value !== null && strlen($value) > $ruleParam) {
                            $errors[$field][] = "Trường $field không được vượt quá $ruleParam ký tự";
                        }
                        break;
                        
                    case 'integer':
                        if ($value !== null && !filter_var($value, FILTER_VALIDATE_INT)) {
                            $errors[$field][] = "Trường $field phải là số nguyên";
                        }
                        break;
                        
                    case 'in':
                        $allowedValues = explode(',', $ruleParam);
                        if ($value !== null && !in_array($value, $allowedValues)) {
                            $errors[$field][] = "Trường $field phải là một trong các giá trị: " . implode(', ', $allowedValues);
                        }
                        break;
                }
            }
        }
        
        return empty($errors) ? true : $errors;
    }
}
