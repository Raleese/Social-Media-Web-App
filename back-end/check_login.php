<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', 'false'); // set to true if using HTTPS

require 'database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'OPTIONS'){
    http_response_code(200);
    exit();
}

if ($method !== 'POST') {
    http_response_code(405);
    exit();
}

try{
    $input = json_decode(file_get_contents('php://input'), true);
    $username = $input['username'];
    $password = $input['password'];

    $db = new Database();
    $user = $db->query('SELECT id, password FROM users WHERE name = :user', ['user' => $username])->fetch();

    if ($user && password_verify($password, $user['password'])){
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $username;
        echo json_encode(['success' => true, 'message' => 'Login successful']);
    }
    else{
        echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }
}catch(PDOException $e){
    echo json_encode(['error' => 'Database error']);
}