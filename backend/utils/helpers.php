<?php
/**
 * Các hàm tiện ích
 */

/**
 * Tạo slug từ chuỗi
 */
function slugify($string) {
    // Chuyển đổi sang chữ thường
    $string = mb_strtolower($string, 'UTF-8');
    
    // Chuyển đổi các ký tự có dấu sang không dấu
    $string = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $string);
    $string = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $string);
    $string = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $string);
    $string = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $string);
    $string = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $string);
    $string = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $string);
    $string = preg_replace('/(đ)/', 'd', $string);
    
    // Xóa các ký tự đặc biệt
    $string = preg_replace('/[^a-z0-9\s-]/', '', $string);
    
    // Thay thế khoảng trắng bằng dấu gạch ngang
    $string = preg_replace('/[\s-]+/', '-', $string);
    
    // Xóa dấu gạch ngang ở đầu và cuối
    $string = trim($string, '-');
    
    return $string;
}

/**
 * Tạo chuỗi ngẫu nhiên
 */
function randomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

/**
 * Định dạng ngày giờ
 */
function formatDate($date, $format = 'd/m/Y') {
    return date($format, strtotime($date));
}

/**
 * Rút gọn văn bản
 */
function truncate($text, $length = 100, $suffix = '...') {
    if (mb_strlen($text, 'UTF-8') <= $length) {
        return $text;
    }
    
    return mb_substr($text, 0, $length, 'UTF-8') . $suffix;
}

/**
 * Tạo tên file an toàn
 */
function safeFileName($fileName) {
    // Lấy phần mở rộng
    $extension = pathinfo($fileName, PATHINFO_EXTENSION);
    
    // Tạo tên file mới
    $newFileName = randomString(20) . '.' . $extension;
    
    return $newFileName;
}

/**
 * Upload file
 */
function uploadFile($file, $directory = 'uploads', $allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx']) {
    // Kiểm tra thư mục upload
    $uploadDir = UPLOAD_DIR . $directory . '/';
    
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    // Kiểm tra lỗi upload
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return [
            'success' => false,
            'message' => 'Lỗi upload file: ' . $file['error']
        ];
    }
    
    // Kiểm tra kích thước file (max 10MB)
    if ($file['size'] > 10 * 1024 * 1024) {
        return [
            'success' => false,
            'message' => 'Kích thước file không được vượt quá 10MB'
        ];
    }
    
    // Kiểm tra loại file
    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($fileExtension, $allowedTypes)) {
        return [
            'success' => false,
            'message' => 'Loại file không được hỗ trợ. Chỉ chấp nhận: ' . implode(', ', $allowedTypes)
        ];
    }
    
    // Tạo tên file an toàn
    $newFileName = safeFileName($file['name']);
    $uploadPath = $uploadDir . $newFileName;
    
    // Upload file
    if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
        return [
            'success' => true,
            'file_name' => $newFileName,
            'file_path' => $uploadPath,
            'file_url' => UPLOAD_URL . $directory . '/' . $newFileName
        ];
    } else {
        return [
            'success' => false,
            'message' => 'Không thể upload file'
        ];
    }
}

/**
 * Xóa file
 */
function deleteFile($filePath) {
    if (file_exists($filePath)) {
        return unlink($filePath);
    }
    return false;
}

/**
 * Kiểm tra URL hợp lệ
 */
function isValidUrl($url) {
    return filter_var($url, FILTER_VALIDATE_URL) !== false;
}

/**
 * Lấy URL hiện tại
 */
function currentUrl() {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    $uri = $_SERVER['REQUEST_URI'];
    
    return $protocol . '://' . $host . $uri;
}

/**
 * Chuyển hướng
 */
function redirect($url) {
    header('Location: ' . $url);
    exit();
}

/**
 * Lấy tên miền
 */
function getDomain() {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    
    return $protocol . '://' . $host;
}

/**
 * Mã hóa mật khẩu
 */
function hashPassword($password) {
    return password_hash($password, PASSWORD_BCRYPT);
}

/**
 * Kiểm tra mật khẩu
 */
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

/**
 * Lấy IP của client
 */
function getClientIp() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

/**
 * Kiểm tra là số
 */
function isNumber($value) {
    return is_numeric($value);
}

/**
 * Kiểm tra là email
 */
function isEmail($value) {
    return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Kiểm tra là ngày hợp lệ
 */
function isDate($value, $format = 'Y-m-d') {
    $date = DateTime::createFromFormat($format, $value);
    return $date && $date->format($format) === $value;
}

/**
 * Lấy thời gian hiện tại
 */
function now($format = 'Y-m-d H:i:s') {
    return date($format);
}
