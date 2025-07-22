<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'database.php';

$method = $_SERVER["REQUEST_METHOD"];

// Handling CORS request and exiting
if ($method === "OPTIONS") {
    http_response_code(200);
    exit;
}

// if request method is not POST, exit
if ($method !== "POST")
    exit;

$input = json_decode(file_get_contents("php://input"), true);

// If text is empty, exit
if (!isset($input["text"]) || trim($input["text"]) === "")
    exit;

try {
    $db = new Database();
    $statement = $db->query("INSERT INTO `post-test` (text) VALUES (:txt)", [
        'txt' => $input['text']
    ]);

    echo json_encode([
        'message' => 'Post created successfully',
    ]);
    exit;

} catch (PDOException $e) {
    echo json_encode([
        'message' => 'Database error',
    ]);
    exit;
}
