<?php
/**
 * Cấu hình chung cho ứng dụng
 */

// Chế độ debug (true trong môi trường phát triển, false trong môi trường production)
define('DEBUG', true);

// Cấu hình cơ sở dữ liệu
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'vmu_fit_db');

// Cấu hình JWT (JSON Web Token)
define('JWT_SECRET', 'your-secret-key-change-this-in-production');
define('JWT_EXPIRATION', 3600); // Thời gian hết hạn token (giây)
define('JWT_REFRESH_EXPIRATION', 86400); // Thời gian hết hạn refresh token (giây)

// Đường dẫn upload
define('UPLOAD_DIR', __DIR__ . '/../uploads/');
define('UPLOAD_URL', '/uploads/');

// Cấu hình CORS
define('ALLOWED_ORIGINS', [
    'http://localhost:3000',
    'https://fit.vimaru.edu.vn'
]);

// Thiết lập múi giờ
date_default_timezone_set('Asia/Ho_Chi_Minh');

// Hiển thị lỗi trong chế độ debug
if (DEBUG) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(0);
}

// Hàm xử lý lỗi tùy chỉnh
function handleError($errno, $errstr, $errfile, $errline) {
    if (DEBUG) {
        echo json_encode([
            'status' => 'error',
            'message' => $errstr,
            'file' => $errfile,
            'line' => $errline
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Đã xảy ra lỗi. Vui lòng thử lại sau.'
        ]);
    }
    exit();
}

// Đăng ký hàm xử lý lỗi
set_error_handler('handleError');
