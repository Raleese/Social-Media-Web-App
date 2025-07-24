<?php 
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

require 'database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS'){
    http_response_code(200);
    exit;
}

if ($method !== 'POST'){
    http_response_code(405);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$username = $input['username'];
$password = $input['password'];
$email = $input['email'];

if (!isset($username) || !isset($email) || !isset($password)
    || trim($username) === '' || trim($email) === '' || trim($password) === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

try{
    $db = new Database();
    $statement = $db->query("INSERT INTO users (name, email, password) VALUES (:user, :mail, :pass)", [
        "user" => $username,
        "mail"=> $email,
        "pass"=> password_hash($password, PASSWORD_DEFAULT),
    ]);
    http_response_code(201);
    echo json_encode([ 'message' => 'Post created successfully' ]);
    exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([ 'message' => 'Database error']);
    exit;
}