import "../css/home.css"

function Home(){
    return (
        <div className="home-page">
            <form className="form">
                <textarea placeholder="Write a post"></textarea>
                <button className="submit-button" type="submit">Post</button>
            </form>
        </div>
    )
}

export default Home;