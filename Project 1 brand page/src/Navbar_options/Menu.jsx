import { NavLink } from "react-router";

export function Menu(){
    return(
        <div>
            <h1 style={{cursor: "pointer"}}>Menu</h1>
            <p>Our menu includes...</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}
