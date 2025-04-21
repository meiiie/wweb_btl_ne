<?php
/**
 * Lớp Auth - Xử lý xác thực người dùng
 */
class Auth {
    private $db;
    private $user = null;
    
    /**
     * Khởi tạo Auth
     */
    public function __construct() {
        $this->db = Database::getInstance();
        $this->checkAuth();
    }
    
    /**
     * Kiểm tra xác thực từ token
     */
    private function checkAuth() {
        // Lấy token từ header Authorization
        $headers = getallheaders();
        $authHeader = $headers['Authorization'] ?? '';
        
        if (empty($authHeader) || !preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            return false;
        }
        
        $token = $matches[1];
        
        try {
            // Giải mã token
            $payload = $this->decodeToken($token);
            
            // Kiểm tra token hết hạn
            if ($payload['exp'] < time()) {
                return false;
            }
            
            // Lấy thông tin người dùng từ database
            $this->db->query("SELECT * FROM users WHERE id = :id");
            $this->db->bind(':id', $payload['sub']);
            $user = $this->db->fetch();
            
            if (!$user) {
                return false;
            }
            
            // Loại bỏ mật khẩu
            unset($user['password_hash']);
            
            // Lưu thông tin người dùng
            $this->user = $user;
            
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
    
    /**
     * Tạo token JWT
     */
    public function createToken($userId) {
        // Header
        $header = json_encode([
            'typ' => 'JWT',
            'alg' => 'HS256'
        ]);
        
        // Payload
        $payload = json_encode([
            'sub' => $userId,
            'iat' => time(),
            'exp' => time() + JWT_EXPIRATION
        ]);
        
        // Encode header và payload
        $base64Header = $this->base64UrlEncode($header);
        $base64Payload = $this->base64UrlEncode($payload);
        
        // Tạo signature
        $signature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, JWT_SECRET, true);
        $base64Signature = $this->base64UrlEncode($signature);
        
        // Tạo token
        return $base64Header . '.' . $base64Payload . '.' . $base64Signature;
    }
    
    /**
     * Giải mã token JWT
     */
    private function decodeToken($token) {
        // Tách token thành 3 phần
        $parts = explode('.', $token);
        
        if (  {
        // Tách token thành 3 phần
        $parts = explode('.', $token);
        
        if (count($parts) !== 3) {
            throw new Exception('Token không hợp lệ');
        }
        
        // Giải mã payload
        $payload = json_decode($this->base64UrlDecode($parts[1]), true);
        
        // Kiểm tra signature
        $base64Header = $parts[0];
        $base64Payload = $parts[1];
        $signature = $this->base64UrlDecode($parts[2]);
        
        $expectedSignature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, JWT_SECRET, true);
        
        if (!hash_equals($expectedSignature, $signature)) {
            throw new Exception('Signature không hợp lệ');
        }
        
        return $payload;
    }
    
    /**
     * Mã hóa base64url
     */
    private function base64UrlEncode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
    
    /**
     * Giải mã base64url
     */
    private function base64UrlDecode($data) {
        return base64_decode(strtr($data, '-_', '+/'));
    }
    
    /**
     * Kiểm tra người dùng đã đăng nhập chưa
     */
    public function check() {
        return $this->user !== null;
    }
    
    /**
     * Lấy thông tin người dùng đã đăng nhập
     */
    public function user() {
        return $this->user;
    }
    
    /**
     * Đăng nhập
     */
    public function login($username, $password) {
        // Tìm người dùng theo username
        $this->db->query("SELECT * FROM users WHERE username = :username");
        $this->db->bind(':username', $username);
        $user = $this->db->fetch();
        
        if (!$user) {
            return false;
        }
        
        // Kiểm tra mật khẩu
        if (!password_verify($password, $user['password_hash'])) {
            return false;
        }
        
        // Loại bỏ mật khẩu
        unset($user['password_hash']);
        
        // Lưu thông tin người dùng
        $this->user = $user;
        
        // Tạo token
        $token = $this->createToken($user['id']);
        
        return [
            'user' => $user,
            'token' => $token
        ];
    }
}
