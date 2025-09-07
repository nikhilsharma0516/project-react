import { NavLink } from 'react-router'
import './Home.css'
export function Home(){
    return(
        <>
        <section className="hero-section">
            <div className="hero-text">
                <h1>YOUR FEET DESERVE<br></br> THE BEST</h1>
                <p>Your feet deserve the best care and comfort. Treat them right with our premium products.</p>
                <button className='button'>Shop Now</button>
                <button className='button' id="category">Category</button>
                <p id='kk'>Also Avaiable on</p>
                <NavLink to="https://www.amazon.com/"><img src="amazon.png" alt="amazon"  className='store' /></NavLink>
                <NavLink to="https://www.flipkart.com/"><img src="flipkart.png" alt="flipkart" className='store' /></NavLink>
            </div>
            <div className="hero-image">
                <img src="hero-image.png" alt="hero" />
            </div>
        </section>
        </>
    )
}   