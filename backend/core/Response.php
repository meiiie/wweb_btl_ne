<?php
/**
 * Lớp Response - Xử lý phản hồi API
 */
class Response {
    /**
     * Trả về phản hồi thành công
     */
    public static function success($data = null, $message = 'Thành công', $statusCode = 200) {
        self::setHeaders($statusCode);
        
        echo json_encode([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ]);
        exit();
    }
    
    /**
     * Trả về phản hồi lỗi
     */
    public static function error($message = 'Đã xảy ra lỗi', $statusCode = 400, $errors = null) {
        self::setHeaders($statusCode);
        
        $response = [
            'status' => 'error',
            'message' => $message
        ];
        
        if ($errors !== null) {
            $response['errors'] = $errors;
        }
        
        echo json_encode($response);
        exit();
    }
    
    /**
     * Trả về phản hồi không tìm thấy
     */
    public static function notFound($message = 'Không tìm thấy tài nguyên') {
        self::error($message, 404);
    }
    
    /**
     * Trả về phản hồi không được phép
     */
    public static function forbidden($message = 'Không có quyền truy cập') {
        self::error($message, 403);
    }
    
    /**
     * Trả về phản hồi không được xác thực
     */
    public static function unauthorized($message = 'Chưa xác thực') {
        self::error($message, 401);
    }
    
    /**
     * Trả về phản hồi tạo thành công
     */
    public static function created($data = null, $message = 'Tạo thành công') {
        self::success($data, $message, 201);
    }
    
    /**
     * Thiết lập headers
     */
    private static function setHeaders($statusCode) {
        header('Content-Type: application/json; charset=UTF-8');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        
        // Thiết lập HTTP status code
        http_response_code($statusCode);
    }
}
