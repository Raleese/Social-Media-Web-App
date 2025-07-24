import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css"
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { logoutUser } from "../api/async_functions";

function NavBar(){

    const { user, setUser } = useContext(AuthContext);

    async function handleLogout(){
        await logoutUser();
        setUser(null);
        console.log("success");
    }

    return (
        <nav className="nav-bar">
            <div className="navbar-left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div><h2>SOCIAL MEDIA APP WEB</h2></div>
            <div className="navbar-right">
                {user ?
                <>
                    <span>Hello, {user}</span>
                    <button className="logout-button" onClick={handleLogout}>Log out</button>         
                </> :
                <>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </>
                }
            </div>
        </nav>
    );
}

export default NavBar;