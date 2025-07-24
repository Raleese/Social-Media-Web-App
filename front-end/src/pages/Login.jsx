import '../styles/login.css';

function Login(){
    return (
        <div className="login-page">
            <form className="login-form">
                <label>Username</label>
                <input type="text" className="login-input"></input>
                <label>Password</label>
                <input type="password" className="login-input" ></input>
                <button type="submit" className="login-button">Log in</button>
            </form>
            <p className="error"></p>
        </div>
    )
}

export default Login;