export async function createPost(text) {
  if (!text.trim()) {
    throw new Error('Please write something before posting.');
  }

  const textData = { text };

  const response = await fetch('http://localhost:3000/back-end/create_post.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(textData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create post');
  }

  return response.json();
}