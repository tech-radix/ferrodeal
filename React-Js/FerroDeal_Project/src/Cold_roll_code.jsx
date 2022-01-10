import * as React from 'react';
import "./Cold_roll.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function Coldrollpage() {

  return (
    <>
       <div className="nav_bar">

<nav>

<div className='nav_image'>
  <div className='logo'></div>
</div>
<div class="menu">
<li><Link to="/SwipeableTextMobileStepper">Home</Link></li>
  <li>Cart</li>
  <li>Order history</li>
  <li><Link to='/contact'>Contact</Link></li>

  </div>

 <FadeMenu></FadeMenu>

<li><i class='fas fa-sign-out-alt'></i></li>
  </nav>
</div>
      <div className='cold-rolled-product'>
        <div className="cold-rolled-heading">Material Type</div>
        <center className='cold-rolled-center' ><hr className='cold-rolled-hr' ></hr><div className='cold-rolled-box'></div><hr className='cold-rolled-hr' ></hr></center>

        <center><button className="cold-rolled-button-1"> Please select produt type </button></center>

        <div className='cold-rolled-block'>
          <span className='cold-rolled-span' ><div className='cold-rolled-box_1'></div><h3 className='cold-rolled-h3' >CRCA
          
          
          
           </h3></span>
          <span className='cold-rolled-span' ><div className='cold-rolled-box_2'></div><h3 className='cold-rolled-h3' > Sheet/Plate </h3></span>
         
        </div>
        <div className='cold-rolled-block_2'>
          <span className='cold-rolled-span' ><div className='cold-rolled-box_4'></div><h3 className='cold-rolled-h3' > Slitted Coil </h3></span>
          <span className='cold-rolled-span' ><div className='cold-rolled-box_5'></div><h3 className='cold-rolled-h3' > Cut to Size</h3></span>
          
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
export default Coldrollpage;