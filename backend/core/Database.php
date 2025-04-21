<?php
/**
 * Lớp Database - Xử lý kết nối và truy vấn cơ sở dữ liệu
 */
class Database {
    private $host = DB_HOST;
    private $user = DB_USER;
    private $pass = DB_PASS;
    private $dbname = DB_NAME;
    
    private $conn;
    private $stmt;
    private static $instance = null;
    
    /**
     * Khởi tạo kết nối PDO
     */
    private function __construct() {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname . ';charset=utf8mb4';
        $options = [
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        
        try {
            $this->conn = new PDO($dsn, $this->user, $this->pass, $options);
        } catch (PDOException $e) {
            throw new Exception('Lỗi kết nối cơ sở dữ liệu: ' . $e->getMessage());
        }
    }
    
    /**
     * Lấy instance của Database (Singleton pattern)
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    
    /**
     * Chuẩn bị câu lệnh SQL
     */
    public function query($sql) {
        $this->stmt = $this->conn->prepare($sql);
        return $this;
    }
    
    /**
     * Bind giá trị cho tham số
     */
    public function bind($param, $value, $type = null) {
        if (is_null($type)) {
            switch (true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }
        }
        
        $this->stmt->bindValue($param, $value, $type);
        return $this;
    }
    
    /**
     * Thực thi câu lệnh SQL
     */
    public function execute() {
        return $this->stmt->execute();
    }
    
    /**
     * Lấy tất cả kết quả
     */
    public function fetchAll() {
        $this->execute();
        return $this->stmt->fetchAll();
    }
    
    /**
     * Lấy một kết quả
     */
    public function fetch() {
        $this->execute();
        return $this->stmt->fetch();
    }
    
    /**
     * Đếm số bản ghi
     */
    public function rowCount() {
        return $this->stmt->rowCount();
    }
    
    /**
     * Lấy ID của bản ghi vừa chèn
     */
    public function lastInsertId() {
        return $this->conn->lastInsertId();
    }
    
    /**
     * Bắt đầu transaction
     */
    public function beginTransaction() {
        return $this->conn->beginTransaction();
    }
    
    /**
     * Commit transaction
     */
    public function commit() {
        return $this->conn->commit();
    }
    
    /**
     * Rollback transaction
     */
    public function rollback() {
        return $this->conn->rollBack();
    }
    
    /**
     * Debug câu lệnh SQL
     */
    public function debugDumpParams() {
        return $this->stmt->debugDumpParams();
    }
}
