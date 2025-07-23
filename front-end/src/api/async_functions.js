export async function registerUser(username, email, password) {
    const response = await fetch('http://localhost:3000/back-end/register_user.php', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password})  
    });
    return response.json;
}

export async function createPost(text) {

  const response = await fetch('http://localhost:3000/back-end/create_post.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text}),
  });

  return response.json();
}

export async function getPosts() {
  const response = await fetch('http://localhost:3000/back-end/display_posts.php');
  return response.json();
}
