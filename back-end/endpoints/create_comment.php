<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

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

if (!isset($_SESSION['user_id']) || !isset($_SESSION['username'])){
    echo json_encode(['success' => false, 'message' => 'User not logged in']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$username = $_SESSION['username'];

if (!isset($data['body']) || trim($data['body']) === '') {
    echo json_encode(['message' => 'Body cannot be empty']);
    exit;
}

try{
    $db = new Database();
    $db->query('INSERT INTO comments (post_id, body, user, `date`) VALUES (:id, :body, :u, :d)', [
        'id' => $data['postId'],
        'body' => $data['body'],
        'u' => $username,
        'd' => date("Y-m-d H:i:s")
    ]);
    echo json_encode(['success'=> true, 'message'=> 'Comment created']);
    exit;
}catch(PDOException $e){
    echo json_encode(['success'=> false, 'message'=> 'Database error']);
    exit;
}