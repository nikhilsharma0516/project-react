import './form.css'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
export function Form(){
    return(
        <>
        <div className="main">
        <div className="form">
        <form action="" className="details">
                
          <button className="button"><MdMessage className='icon'/>VIA CALL</button>
          <button className="button" id="2"><IoCallOutline className='icon'/>VIA TEXT </button>
          <button className="button"><MdMessage className='icon'/>VIA EMAIL</button>

          <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>

            <div class="input-group">
            <input type="email" id="email" required />
            <label for="email">E-Mail</label>
            </div>

            <div class="input-group">
            <textarea id="text" rows="4" required></textarea>
            <label for="text">TEXT</label>
            </div>
        </form>
        </div>
        <div className="hero-image">
            <img src="contact.svg" alt="" />
        </div>
      </div>
        </>
    )
}