import "../styles/home.css"
import Post from "../components/Post"
import {useState, useEffect} from 'react';
import {createPost, getPosts} from '../api/async_functions';
import Validator from '../validation/validator';

function Home() {
  const [status, setStatus] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  // fetching posts when page loads
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try{
        const data = await getPosts();
        setItems(data);
    }
    catch (error){
        setStatus(`Error: ${error.message}`);
    }
  }

  // adding a new post
  async function handleAddText(event) {
    event.preventDefault(); // prevent reload

    if (!Validator.isString(text)){
      setStatus(`Error: provide non-empty text`);
      return;
    }

    try {
        await createPost(text);
        setStatus(`Posted!`);
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
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="submit-button" type="submit">Post</button>
      </form>

      <p className="errors">{status}</p>

      <div className="posts-container">
        {items.map(item => (
            <Post key={item.id} text={item.text}/>
        ))}
      </div>
    </div>
  );
}

export default Home;