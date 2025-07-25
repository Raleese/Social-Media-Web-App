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

try{
    $db = new Database();
    $comments = $db->query('SELECT * FROM comments WHERE post_id = :id ORDER BY `date` DESC', ['id' => $data['postId']])->fetchAll();
    echo json_encode($comments);
    exit;
}catch(PDOException $e){
    echo json_encode(['success'=> false, 'message'=> 'Database error']);
    exit;
}