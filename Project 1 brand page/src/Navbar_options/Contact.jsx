import { NavLink } from "react-router";

export function Contact(){
    return(
        <div>
            <h1 style={{cursor: "pointer"}}>Contact Us</h1>
            <p>You can reach us at...</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}
