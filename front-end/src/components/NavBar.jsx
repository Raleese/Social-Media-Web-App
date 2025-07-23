import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css"

function NavBar(){
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