export async function registerUser(username, email, password) {
    const response = await fetch('http://localhost:3000/back-end/register_user.php', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password})  
    });
    return response.json;
}

export async function createPost(body) {
  const response = await fetch('http://localhost:3000/back-end/create_post.php', {
    method: 'POST',
    credentials: 'include', // <-- important for PHP sessions
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  });

  return response.json();
}

export async function getPosts() {
  const response = await fetch('http://localhost:3000/back-end/display_posts.php');
  return response.json();
}

export async function checkLogin(username, password){
  const response = await fetch('http://localhost:3000/back-end/check_login.php', {
    method: "POST",
    credentials: "include",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({username, password})
  });
  return response;
}

export async function checkAuth(){
  const response = await fetch('http://localhost:3000/back-end/check_auth.php', {
    method: "GET",
    credentials: "include"
  });
  return response.json();
}

export async function logout(){
  const response = await fetch('http://localhost:3000/back-end/logout.php', {
    method: "POST",
    credentials: "include"
  });
  return response.json();
}