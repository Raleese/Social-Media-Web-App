import '../styles/login.css';
import { useState, useEffect } from 'react';
import { checkLogin, checkAuth, logout } from '../api/async_functions';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function verifySession() {
            const data = await checkAuth();
            if (data.authenticated) {
                setUser(data.username);
                setStatus(`Welcome back, ${data.username}`);
            }
        }
        verifySession();
    }, []);    

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

    async function handleLogout() {
        await logout();
        setUser(null);
        setStatus('Logged out');
    }

    return (
        user != null 
        ?
        <div className="login-page">
            <form className="login-form" onSubmit={handleLogout}>
                <button type="submit" className="login-button">Log out</button>
            </form>
            <p className="error">{status}</p>
        </div>
        :         
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