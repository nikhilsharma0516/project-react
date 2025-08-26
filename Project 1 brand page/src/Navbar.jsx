import { NavLink } from "react-router";
import './Nav.css'
export function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="nav-image">
                    <NavLink to="/"><img src="/brand_logo.png" alt="Brand Logo" /></NavLink>
                </div>
                <div className="nav-list">
                    <NavLink to="/menu">MENU</NavLink>
                    <NavLink to="/location">LOCATION</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
                <div className="login">
                    <NavLink to="/login"><button>Login</button></NavLink>
                </div>

            </nav>
        </>
    )
}