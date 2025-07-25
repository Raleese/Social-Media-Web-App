import "../styles/comments.css"
import ReactDOM from "react-dom";

function Comments({onClose}) {
    return ReactDOM.createPortal(
        <div className="comment-window">
            <button onClick={onClose}>X</button>
            <form className="comment-form">
                <textarea/>
                <button className="submit-button" type="submit">Comment</button>
            </form>  
            <div className="comment-container">
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default Comments;