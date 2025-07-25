import "../styles/comments.css"
import ReactDOM from "react-dom";
import { createComment, getComments } from "../api/async_functions";
import { useState, useEffect } from "react";
import Validator from "../helpers/validator";

function Comments({onClose, postId}) {

    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, [])

    async function fetchComments() {
        try{
            const data = await getComments({postId});
            setComments(data);
        }
        catch (error){
            setStatus(`Error: ${error.message}`);
        }
    }

    async function handleAddComment(event) {
        event.preventDefault(); // prevent reload

        if (!Validator.isString(body)){
            setStatus(`Error: provide non-empty text`);
            return;
        }
        try {
            await createComment({body, postId});
            setStatus(`Posted!`);
            setBody('');
            fetchComments();
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    }

    return ReactDOM.createPortal(
        <div className="comment-window">
            <button onClick={onClose}>X</button>
            <form className="comment-form">
                <textarea className="text-area" value={body} onChange={e => setBody(e.target.value)}/>
                <button className="comment-button" type="submit" onClick={handleAddComment}>Comment</button>
            </form>  
            <p>{status}</p>
            <div className="comment-container">
                {comments.map(item => (<p>{item.user} : {item.body} &#40; {item.date} &#41;</p>))}
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default Comments;