import "../styles/post.css"

function Post({body, date, name}) {
    return(
        <div className="post">
            <div className="post-header">
                <span className="post-user">{name}</span>
            </div>

            <div className="post-content">{body}</div>

            <div className="post-footer">
                <span className="post-date">{date}</span>
            </div>
        </div>
    )
}

export default Post;