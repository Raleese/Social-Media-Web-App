<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require 'database.php';
session_start();

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

try{
    $db = new Database();
    $user = $db->query('SELECT * FROM users WHERE name = :username', ['username' => $username])->fetch();

    if($user && password_verify($password, $user['password'])){
        $_SESSION['username'] = $user['name'];
        $_SESSION['user_id'] = $user['id'];
        http_response_code(201);
        echo json_encode(['message'=> 'Logged in successfuly']);
    }
    else{
        echo json_encode(['message'=> 'Wrong credentials']);
    }
}
catch(PDOException $e){
    http_response_code(500);
    echo json_encode(['message'=> 'Database error']);
}