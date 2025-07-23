import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css"
import {useState, useEffect} from 'react';
import { checkAuth } from "../api/async_functions";

function NavBar(){

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function verifySession() {
            const data = await checkAuth();
            if (data.authenticated) {
                setUser(data.username);
            }
        }
        verifySession();
    }, []);

    return (
        <nav className="nav-bar">
            <div className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;