
import { NavLink } from "react-router";
export function Login(){
    return(
        <div>
            <h1 style={{cursor: "pointer"}}>Login</h1>
            <p>Please enter your credentials to login.</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}
