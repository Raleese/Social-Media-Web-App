<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type');

require 'database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET'){
    http_response_code(405);
    exit;
}

try{
    $db = new Database();
    $items = $db->query('SELECT * FROM posts ORDER BY date DESC')->fetchAll();

    http_response_code( 200);
    echo json_encode($items);
    exit;
}catch(PDOException $e){
    http_response_code( 500);
    echo json_encode([ 'message' => 'Database error']);
    exit;    
}