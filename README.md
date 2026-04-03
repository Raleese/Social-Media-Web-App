# Social Media Web App

A full-stack social feed app with a React frontend and a PHP + MySQL backend.

# Screenshots

<img width="2879" height="1287" alt="image" src="https://github.com/user-attachments/assets/a3e9fa74-d051-4079-b62f-7dec6dbcfec9" />

<img width="2879" height="1273" alt="image" src="https://github.com/user-attachments/assets/bd84caf6-ba27-44a5-b702-d83eabd45072" />

<img width="2879" height="1266" alt="image" src="https://github.com/user-attachments/assets/37289111-72f7-460e-914c-641c9f1d4f06" />


## Tech Stack

- Frontend: React + Vite + React Router
- Backend: PHP (endpoint-based API)
- Database: MySQL (PDO)
- Auth: PHP sessions + cookies

## Project Structure

- `front-end/` - React client
- `back-end/endpoints/` - PHP API endpoints

## Features

- User registration
- User login/logout with session cookies
- Auth status check
- Create and list posts
- Create and list comments per post

## Prerequisites

- Node.js 18+ and npm
- PHP 8+ with PDO MySQL extension enabled
- MySQL Server

## Database Setup

The schema is versioned in:

- `back-end/db/schema.sql`

Initialize the database from project root:

```powershell
mysql -u root -p < back-end/db/schema.sql
```

Database connection is configured via environment variables (with defaults):

- `DB_HOST` (default: `localhost`)
- `DB_PORT` (default: `3306`)
- `DB_NAME` (default: `social_media_db`)
- `DB_USER` (default: `root`)
- `DB_PASSWORD` (default: `titale`)

Example configuration file:

- `back-end/.env.example`

Set variables in your terminal before starting PHP (PowerShell):

```powershell
$env:DB_HOST = "localhost"
$env:DB_PORT = "3306"
$env:DB_NAME = "social_media_db"
$env:DB_USER = "root"
$env:DB_PASSWORD = "your_password"
```

Why this is better:

- One reusable schema script instead of manual SQL copy-paste
- Cleaner local setup across different machines
- No DB credentials hardcoded in endpoint logic

## Run the App (Local Development)

Run backend and frontend in separate terminals.

### 1) Start the PHP backend server

From the repository root:

```powershell
php -S localhost:3000
```

This makes endpoints available under:

- `http://localhost:3000/back-end/endpoints/...`

### 2) Start the React frontend

```powershell
cd front-end
npm install
npm run dev
```

Vite runs on:

- `http://localhost:5173`

## API Endpoints

Base URL:

- `http://localhost:3000/back-end/endpoints`

Routes used by frontend:

- `POST /register_user.php` - register account
- `POST /session.php` - login
- `GET /session.php` - logout
- `GET /check_auth.php` - check current session
- `GET /posts.php` - list posts
- `POST /posts.php` - create post
- `POST /create_comment.php` - create comment
- `POST /get_comments.php` - list comments for a post

## Notes

- Backend CORS currently allows origin `http://localhost:5173`.
- Session-based auth requires cookies, and frontend requests already use `credentials: 'include'` where needed.
- API URLs are currently hardcoded in `front-end/src/api/async_functions.js` to `http://localhost:3000`.

## Troubleshooting

- If API calls fail, verify PHP server is running on port `3000`.
- If DB calls fail, verify MySQL is running, then run `mysql -u root -p < back-end/db/schema.sql`.
- If credentials are wrong, set `DB_*` variables before starting the PHP server.
- If login/session behavior is inconsistent, clear browser cookies for `localhost` and retry.
