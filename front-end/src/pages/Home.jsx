import "../css/home.css"
import Post from "../components/Post"
import React, { useState } from 'react';
import {createPost} from '../api/create_post';

function Home() {
  const [status, setStatus] = useState('');
  const [text, setText] = useState('');

  async function handleAddText(event) {
    event.preventDefault();

    try {
      await createPost(text);
      setStatus('Post created successfully!');
      setText('');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  }

  return (
    <div className="home-page">
      <form className="form" onSubmit={handleAddText}>
        <textarea
          placeholder="Write a post"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="submit-button" type="submit">Post</button>
      </form>

      <p>{status}</p>

      <div className="posts-container">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Home;