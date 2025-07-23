import "../styles/post.css"

function Post({body}) {
    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">Me</span>
            </div>

            <div className="post-content">{body}</div>

            <div className="post-footer">
                <span className="post-date">Today</span>
            </div>
        </div>
    )
}

export default Post;