import { NavLink } from "react-router";

export  function About(){
    return(
        <div>
            <h1 style={{cursor: "pointer"}}>About Us</h1>
            <p>We are a company that values...</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    )
}
