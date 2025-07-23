import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css"
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { logout } from "../api/async_functions";

function NavBar(){

    const {user, setUser} = useContext(AuthContext);

    async function handleLogout() {
        await logout();
        setUser(null);
    }

    return (
        <nav className="nav-bar">
            <div className="navbar-left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div><h2>SOCIAL MEDIA APP WEB</h2></div>
            <div className="navbar-right">
                {user ? (
                    <>
                        <span>Welcome, {user}</span>
                        <button onClick={handleLogout}>Log out</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;