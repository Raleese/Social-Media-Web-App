import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css"

function NavBar(){
    return (
        <nav className="nav-bar">
            <div className="navbar-left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div><h2>SOCIAL MEDIA APP WEB</h2></div>
            <div className="navbar-right">
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;