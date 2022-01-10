import * as React from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';
import FadeMenu from './Hamburger';


const Contact = () =>{
    
        return(
  <>
<main>
 <div className="nav_bar">

        <nav>
        
        <div className='nav_image'>
          <div className='logo'></div>
        </div>
        <div class="menu">
        <li><Link to="/SwipeableTextMobileStepper">Home</Link></li>
          <li>Cart</li>
          <li>Order history</li>
          <li><Link to='/Contact'>Contact</Link></li>
        
          </div>
       
         <FadeMenu></FadeMenu>
         <li><i class='fas fa-sign-out-alt'></i></li>
          </nav></div>
          <div className='contact_heading'><h1>Contact Us</h1></div>
          <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>
          <div className='contact_page'>
 

              
        
       <br></br>
       <form>
       <div className='form_heading'>Please fill the form for any queries </div>
      
       <div className='input_class'>Full name: <input type="text" id="name_for_contact" placeholder='Enter your full name...'></input></div>
       <div className='input_class'>Phone number: <input type="number" id="number_for_contact" placeholder='Enter your phone number...'></input></div>
       <div className='input_class'>Message: <input type="text" id="message_for_contact" placeholder='Enter message...'></input></div>
       <button type="submit"  className='contact_btn'>Send</button>
       </form>
</div> 
 <footer>
      <div className='first_side'>
      <div className='footer_image'> </div>
      <div className='address'><i class='fas fa-map-marker-alt'></i> Our Address : <span className='footer_text'>105, Rituraj Buisness Park, Bicholi Mardana Indore (MP)</span></div>
      <div className='mail'> <i class="fa fa-envelope"></i>Mail us at : <span className='footer_text'>support@ferrodeal.com</span></div>
      <div className='contact'><i class="fa fa-phone"></i> Contact number : <span className='footer_text'>+91 9685642619  </span></div>
     
 
      </div>
</footer>
</main>

  </>
 
)
} 
export default Contact;