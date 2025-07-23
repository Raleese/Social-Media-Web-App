<?php
session_start();

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET'){ 
    http_response_code(405); 
    exit(); 
}

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'user_id' => $_SESSION['user_id'],
        'username' => $_SESSION['username']
    ]);
} else {
    echo json_encode(['message' => 'Failed to fetch session data']);
}