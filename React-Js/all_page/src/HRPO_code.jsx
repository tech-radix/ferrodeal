import * as React from 'react';
import "./HRPO.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function HRPOcode() {

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
      <div className='hrpo-product'>
        <div className="hrpo-heading">Material Type</div>
        <center className='hrpo-center' ><hr className='hrpo-hr' ></hr><div className='hrpo-box'></div><hr className='hrpo-hr' ></hr></center>

        <center><button className="hrpo-button-1"> Please select product type </button></center>

        <div className='hrpo-block'>
          <span className='hrpo-span' ><div className='hrpo-box_1'></div><h3 className='hrpo-h3' >Coil </h3></span>
          <span className='hrpo-span' ><div className='hrpo-box_2'></div><h3 className='hrpo-h3' > Sheet/Plate </h3></span>
         
        </div>
        <div className='hrpo-block_2'>
          <span className='hrpo-span' ><div className='hrpo-box_4'></div><h3 className='hrpo-h3' > Slitted Coil </h3></span>
         
          
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
export default  HRPOcode;