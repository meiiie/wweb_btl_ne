<?php
/**
 * API Gateway - Điểm vào chính của API
 * 
 * File này xử lý tất cả các request đến API, phân tích URL và điều hướng đến controller phù hợp
 */

// Cho phép CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Xử lý OPTIONS request (preflight request từ trình duyệt)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

// Bao gồm các file cấu hình và core
require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/core/Database.php';
require_once __DIR__ . '/core/Response.php';
require_once __DIR__ . '/core/Request.php';
require_once __DIR__ . '/core/Router.php';
require_once __DIR__ . '/core/Auth.php';
require_once __DIR__ . '/utils/helpers.php';

// Khởi tạo Router
$router = new Router();

// Đăng ký các route
// Tin tức & Sự kiện
$router->get('/api/news', 'NewsController@index');
$router->get('/api/news/featured', 'NewsController@featured');
$router->get('/api/news/categories', 'NewsController@categories');
$router->get('/api/news/category/{id}', 'NewsController@byCategory');
$router->get('/api/news/{id}', 'NewsController@show');
$router->post('/api/news', 'NewsController@store', true); // true = yêu cầu xác thực
$router->put('/api/news/{id}', 'NewsController@update', true);
$router->delete('/api/news/{id}', 'NewsController@delete', true);

// Sự kiện
$router->get('/api/events', 'EventController@index');
$router->get('/api/events/upcoming', 'EventController@upcoming');
$router->get('/api/events/{id}', 'EventController@show');
$router->post('/api/events', 'EventController@store', true);
$router->put('/api/events/{id}', 'EventController@update', true);
$router->delete('/api/events/{id}', 'EventController@delete', true);

// Giảng viên & Nhân viên
$router->get('/api/staff', 'StaffController@index');
$router->get('/api/staff/featured', 'StaffController@featured');
$router->get('/api/staff/departments', 'StaffController@departments');
$router->get('/api/staff/department/{id}', 'StaffController@byDepartment');
$router->get('/api/staff/{id}', 'StaffController@show');
$router->post('/api/staff', 'StaffController@store', true);
$router->put('/api/staff/{id}', 'StaffController@update', true);
$router->delete('/api/staff/{id}', 'StaffController@delete', true);

// Chương trình đào tạo
$router->get('/api/programs', 'ProgramController@index');
$router->get('/api/programs/{id}', 'ProgramController@show');
$router->get('/api/programs/{id}/courses', 'ProgramController@courses');
$router->post('/api/programs', 'ProgramController@store', true);
$router->put('/api/programs/{id}', 'ProgramController@update', true);
$router->delete('/api/programs/{id}', 'ProgramController@delete', true);

// Môn học
$router->get('/api/courses', 'CourseController@index');
$router->get('/api/courses/{id}', 'CourseController@show');
$router->post('/api/courses', 'CourseController@store', true);
$router->put('/api/courses/{id}', 'CourseController@update', true);
$router->delete('/api/courses/{id}', 'CourseController@delete', true);

// Nghiên cứu khoa học
$router->get('/api/research', 'ResearchController@index');
$router->get('/api/research/areas', 'ResearchController@areas');
$router->get('/api/research/projects', 'ResearchController@projects');
$router->get('/api/research/publications', 'ResearchController@publications');
$router->get('/api/research/{id}', 'ResearchController@show');
$router->post('/api/research', 'ResearchController@store', true);
$router->put('/api/research/{id}', 'ResearchController@update', true);
$router->delete('/api/research/{id}', 'ResearchController@delete', true);

// Tài liệu
$router->get('/api/documents', 'DocumentController@index');
$router->get('/api/documents/categories', 'DocumentController@categories');
$router->get('/api/documents/category/{category}', 'DocumentController@byCategory');
$router->get('/api/documents/{id}', 'DocumentController@show');
$router->post('/api/documents', 'DocumentController@store', true);
$router->put('/api/documents/{id}', 'DocumentController@update', true);
$router->delete('/api/documents/{id}', 'DocumentController@delete', true);

// Liên hệ
$router->post('/api/contact', 'ContactController@submit');

// Xác thực (Authentication)
$router->post('/api/auth/login', 'AuthController@login');
$router->post('/api/auth/logout', 'AuthController@logout', true);
$router->get('/api/auth/me', 'AuthController@me', true);
$router->post('/api/auth/refresh', 'AuthController@refresh');

// Xử lý route
$router->resolve();
