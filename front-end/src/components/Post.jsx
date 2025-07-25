import "../styles/post.css"
import { useState } from "react";
import Comments from "./Comments";

function Post(params) {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">{params.username}</span>
            </div>

            <div className="post-content">{params.body}</div>

            <div className="post-footer">
                <button className="comment-button" onClick={() => setIsOpen(true)}>Comments</button>
                <span className="post-date">{params.date}</span>
            </div>
            {isOpen && <Comments onClose={() => setIsOpen(false)} postId={params.postId}/>}
        </div>
    )
}

export default Post;