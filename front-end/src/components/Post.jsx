import "../styles/post.css"

function Post({text}) {
    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">Josh</span>
            </div>

            <div className="post-content">{text}</div>

            <div className="post-footer">
                <span className="post-date">1999-01-01</span>
            </div>
        </div>
    )
}

export default Post;