import '../styles/login.css';
import { useState, useContext } from 'react';
import { loginUser } from '../api/async_functions';
import Validator from '../helpers/validator';
import { AuthContext } from '../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        if (!Validator.isString(username) || !Validator.isString(password)){
            setStatus('Error: fill out all the required fields');
            return;
        }

        try{
            await loginUser({username, password});
            setUser(username);
            setStatus('Logged in');
            setUsername('');
            setPassword('');
            navigate('/')
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
            <p className="error">{status}</p>
        </div>
    )
}

export default Login;