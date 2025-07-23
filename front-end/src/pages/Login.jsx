import '../styles/login.css';
import { useState, useEffect, useContext } from 'react';
import { checkLogin, checkAuth } from '../api/async_functions';
import { AuthContext } from '../AuthContext';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const {setUser} = useContext(AuthContext);   

    async function handleLogin(event) {
        event.preventDefault();
        try{
            await checkLogin(username, password);
            setStatus ('Logged in');
            setUser(username);
            setUsername('');
            setPassword('');
        }catch(error){
            setStatus(`Error: ${error.message}`);
        }
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" className="login-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" className="login-button">Log in</button>
            </form>
            <p className="error">{status}</p>
        </div>
    )
}

export default Login;