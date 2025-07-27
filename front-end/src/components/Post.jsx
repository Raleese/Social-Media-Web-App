import "../styles/post.css"
import { useState, useContext } from "react";
import Comments from "./Comments";
import { AuthContext } from "../helpers/AuthContext";

function Post(params) {

    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext); 

    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">{params.username}</span>
            </div>

            <div className="post-content">{params.body}</div>

            <div className="post-footer">
                {user ? 
                <button className="comment-button" onClick={() => setIsOpen(true)}>Comments</button> :
                <span>Log in to comment</span>}
                <span className="post-date">{params.date}</span>
            </div>
            {isOpen && <Comments onClose={() => setIsOpen(false)} postId={params.postId}/>}
        </div>
    )
}

export default Post;