import "../css/home.css"
import Post from "../components/Post"

function Home(){
    return (
        <div className="home-page">
            <form className="form">
                <textarea placeholder="Write a post"></textarea>
                <button className="submit-button" type="submit">Post</button>
            </form>

            <div className="posts-container">
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    )
}

export default Home;