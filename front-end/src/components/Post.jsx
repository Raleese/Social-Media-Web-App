import "../styles/post.css"

function Post(params) {
    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">{params.username}</span>
            </div>

            <div className="post-content">{params.body}</div>

            <div className="post-footer">
                <span className="post-date">{params.date}</span>
            </div>
        </div>
    )
}

export default Post;