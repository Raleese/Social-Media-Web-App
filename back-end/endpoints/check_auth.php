<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET'){
    http_response_code(405);
    exit;    
}

if (isset($_SESSION['user_id']) && isset($_SESSION['username'])){
    echo json_encode(['success' => true, 
        'message' => 'User is logged in',
        'user' => [
            'id' => $_SESSION['user_id'],
            'username'=> $_SESSION['username'],
        ]
    ]);
}
else{
    echo json_encode(['success' => false, 'message' => 'User is not logged in']);
}