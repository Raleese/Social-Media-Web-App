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

session_destroy();

echo json_encode(["success" => true]);