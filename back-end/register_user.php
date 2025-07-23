<?php 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require "database.php";

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "OPTIONS"){
    http_response_code(200);
    exit;
}

if ($method !== "POST"){
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if (!isset($input["username"], $input["email"], $input["password"])) {
    http_response_code(400);
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

try{
    $db = new Database();
    $statement = $db->query("INSERT INTO users (name, email, password) VALUES (:user, :mail, :pass)", [
        "user" => $input["username"],
        "mail"=> $input["email"],
        "pass"=> $input["password"],
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