<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");

require 'database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== "GET")
    exit;

try{
    $db = new Database();
    $query = "SELECT * FROM `post-test`";
    $items = $db->query($query)->fetchAll();
    echo json_encode($items);

}catch (PDOException $e) {
    echo json_encode([
        'message' => 'Database error',
    ]);
    exit;
}