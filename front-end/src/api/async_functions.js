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

export async function createPost({body, user}) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/create_post.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body, user }),
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

export async function loginUser({ username, password }) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/login_user.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(`Invalid JSON from server (status ${response.status})`);
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || `Error ${response.status}`);
  }

  return data;
}

export async function checkAuth(){
  const response = await fetch('http://localhost:3000/back-end/endpoints/check_auth.php', {
    credentials: 'include',
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(`Invalid JSON from server (status ${response.status})`);
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || `Error ${response.status}`);
  }

  return data;  
}

export async function logoutUser(){
  const response = await fetch('http://localhost:3000/back-end/endpoints/logout_user.php', {
    credentials: 'include',
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(`Invalid JSON from server (status ${response.status})`);
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || `Error ${response.status}`);
  }

  return data;  
}

export async function createComment({ body, postId }) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/create_comment.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body, postId }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  return response.json();  
}

export async function getComments({ postId }) {
  const response = await fetch('http://localhost:3000/back-end/endpoints/get_comments.php', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  return response.json();  
}