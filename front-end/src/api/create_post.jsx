export async function createPost(text) {

  const response = await fetch('http://localhost:3000/back-end/create_post.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text}),
  });

  return response.json();
}