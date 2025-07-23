import React, { useState, useEffect } from 'react';
import {registerUser} from '../api/async_functions';
import '../css/register.css'


function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [credentials, setCredentials] = useState([

    ])

    async function handleRegister(event) {
        event.preventDefault(); // prevent reload

        if (username == '' || password == '' || email == ''){
            setStatus('Error: fill out all fields');
            return;
        }

        try {
            await registerUser(username, email, password);
            setStatus('Registered successfully!');
            setEmail('');
            setPassword('');
            setUsername('');
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    }

    return (
        <div className="register-page">
            <form className="register-form" onSubmit={handleRegister}>
                <label>Username</label>
                <input type="text" class="register-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>E-mail</label>
                <input type="text" class="register-input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" class="register-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" class="register-button">Register</button>
            </form>
            <p className="error">{status}</p>
        </div>
    )
}

export default Register;