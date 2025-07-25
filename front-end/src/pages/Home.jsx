import "../styles/home.css"
import Post from "../components/Post"
import {useState, useEffect, useContext} from 'react';
import {createPost, getPosts} from '../api/async_functions';
import Validator from '../helpers/validator';
import { AuthContext } from "../helpers/AuthContext";

function Home() {
  const [status, setStatus] = useState('');
  const [body, setBody] = useState('');
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext); 

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

    if (!Validator.isString(body)){
      setStatus(`Error: provide non-empty text`);
      return;
    }

    try {
        await createPost({body, user});
        setStatus(`Posted!`);
        setBody('');
        fetchPosts();
    } catch (error) {
        setStatus(`Error: ${error.message}`);
    }
  }

  return (
    <div className="home-page">
      {user ?
        <>
          <form className="form" onSubmit={handleAddText}>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
            />
            <button className="submit-button" type="submit">Post</button>
          </form>

        <p className="errors">{status}</p>
        </> :
        <>
          <span>Register or log in to post something</span>
        </>
      }

      <div className="posts-container">
        {items.map(item => (
            <Post key={item.id} body={item.body} date={item.date} username={item.username} postId={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Home;