import * as React from 'react';
import "./comingsoon.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function Comingsoon_code() {

  return (
    <>
       <div className="nav_bar">

<nav>

<div className='nav_image'>
  <div className='logo'></div>
</div>
<div class="menu">
<li><Link to="/home">Home</Link></li>
  <li>Cart</li>
  <li>Order history</li>
  <li><Link to='/contact'>Contact</Link></li>

  </div>

 <FadeMenu></FadeMenu>

<li><i class='fas fa-sign-out-alt'></i></li>
  </nav>
</div>
    <div className='comingsoon_box'>

<div className='working_on_it'>
   Coming Soon...<br/>
   We are working on it 🛠


    
</div>

    </div>
      <footer>
      <div className='first_side'>
      <div className='footer_image'> </div>
      <div className='address'><i className='fas fa-map-marker-alt'></i> Our Address : <span className='footer_text'>105, Rituraj Buisness Park, Bicholi Mardana Indore (MP)</span></div>
      <div className='mail'> <i className="fa fa-envelope"></i>Mail us at : <span className='footer_text'>support@ferrodeal.com</span></div>
      <div className='contact'><i className="fa fa-phone"></i> Contact number : <span className='footer_text'>+91 9685642619  </span></div>
      </div>
     </footer>
    </>
  );
}
export default Comingsoon_code;