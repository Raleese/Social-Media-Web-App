import '../styles/login.css';
import { useState, useEffect } from 'react';
import { loginUser, checkAuth } from '../api/async_functions';
import Validator from '../validation/validator';

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function Authenticate() {
            try {
            const data = await checkAuth();
            setUser(data.user.username);
            } catch (err) {
            console.error("Authentication failed:", err.message);
            setUser(null);
            }
        }

        Authenticate();
    }, [])

    async function handleLogin(event) {
        event.preventDefault();

        if (!Validator.isString(username) || !Validator.isString(password)){
            setStatus('Error: fill out all the required fields');
            return;
        }

        try{
            await loginUser({username, password});
            setStatus('Logged in');
            setUsername('');
            setPassword('');
        }
        catch(error){
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
            {user ? 
            <>
                <p>Logged in</p>
            </>
            :
            <>
                <p>Not logged in</p>
            </>
            }
            <p className="error">{status}</p>
        </div>
    )
}

export default Login;