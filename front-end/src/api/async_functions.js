export async function registerUser(username, email, password) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/register_user.php', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, email, password})  
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

    return response.json;
}

export async function createPost(body) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/create_post.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  return response.json();
}

export async function getPosts() {
  const response = await fetch('http://localhost:3000/back-end/endpoints/display_posts.php');

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  return response.json();
}

export async function loginUser ({username, password}){
  const response = await fetch('http://localhost:3000/back-end/endpoints/login_user.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({username, password})
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  return response.json();  
}