import { NavLink } from "react-router";
import "./navbar.css"
export function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
        </div>
        </>
    )
}