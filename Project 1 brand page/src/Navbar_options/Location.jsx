import { NavLink } from "react-router";

export function Location(){
    return(
        <div>
            <h1 style={{cursor: "pointer"}}>Our Location</h1>
            <p>We are located at...</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}
