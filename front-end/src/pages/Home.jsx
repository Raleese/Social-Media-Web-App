import "../css/home.css"
import Post from "../components/Post"
import React, { useState, useEffect } from 'react';
import {createPost} from '../api/create_post';
import {getPosts} from '../api/get_posts';

function Home() {
  const [status, setStatus] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try{
        const data = await getPosts();
        setItems(data);
    }
    catch (error){
        setStatus('Error: ${error.message}');
    }
  }

  async function handleAddText(event) {
    event.preventDefault(); // prevent reload

    try {
        await createPost(text);
        setStatus('Post created successfully!');
        setText('');
        fetchPosts();
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
        {items.map(item => (
            <Post key={item.id} text={item.text}/>
        ))}
      </div>
    </div>
  );
}

export default Home;