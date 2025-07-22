export async function getPosts() {
  const response = await fetch('http://localhost:3000/back-end/display_posts.php');
  return response.json();
}
