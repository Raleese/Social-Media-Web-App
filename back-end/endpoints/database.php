<?php
class Database
{
    public PDO $connection;

    public function __construct()
    {
        $host = getenv('DB_HOST') ?: 'localhost';
        $port = getenv('DB_PORT') ?: '3306';
        $name = getenv('DB_NAME') ?: 'social_media_db';
        $user = getenv('DB_USER') ?: 'root';
        $passw = getenv('DB_PASSWORD') ?: 'titale';

        $dsn = "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4";

        try {
            $this->connection = new PDO(
                $dsn,
                $user,
                $passw,
                [
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
        } catch (PDOException $e) {
            throw new RuntimeException('Database connection failed. Check DB_* environment variables and MySQL status.');
        }
    }

    public function query($query, $params = [])
    {
        $statement = $this->connection->prepare($query);
        $statement->execute($params);

        return $statement;
    }
}