<?php
    class Database{
        public $connection;
        public function __construct($user = 'root', $passw = 'titale'){

            $dsn = "mysql:host=localhost;dbname=social_media_db;charset=utf8mb4";
            $this->connection = new PDO($dsn, $user, $passw, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
        }

        public function query ($query, $params = []){
            $statement = $this->connection->prepare($query);
            $statement->execute($params);

            return $statement;
        }
    }