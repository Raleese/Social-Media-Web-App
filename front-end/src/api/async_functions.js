export async function registerUser(username, email, password) {
    const response = await fetch('http://localhost:3000/back-end/endpoints/register_user.php', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password})  
    });
    return response.json;
}

export async function createPost(body) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/create_post.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  });

  return response.json();
}

export async function getPosts() {
  const response = await fetch('http://localhost:3000/back-end/endpoints/display_posts.php');
  return response.json();
}