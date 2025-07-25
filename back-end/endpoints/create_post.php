<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

require 'database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['body']) || trim($input['body']) === '') {
    echo json_encode(['message' => 'Body cannot be empty']);
    exit;
}

try {
    $db = new Database();
    $db->query(
        "INSERT INTO posts (body, `date`, user_id, username) VALUES (:txt, :d, :id, :uname)",
        [
            'txt' => $input['body'],
            'd' => date("Y-m-d H:i:s"),
            'id' => 1,
            'uname' => $input['user'],
        ]
    );

    echo json_encode([
        'message' => 'Post created successfully',
    ]);
    exit;

} catch (PDOException $e) {
    error_log($e->getMessage()); // log actual error to server logs
    echo json_encode([
        'message' => 'Database error',
    ]);
    exit;
}
