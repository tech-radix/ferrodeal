import * as React from 'react';
import "./updated-stock.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function UpdatedStock() {

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
  <li><Link to='/Contact'>Contact</Link></li>

  </div>

 <FadeMenu></FadeMenu>

<li><i class='fas fa-sign-out-alt'></i></li>
  </nav>
</div>
      <div className='updated-stock-product'>
        <div className="updated-stock-heading">Clearance Sale</div>
        <center className='updated-stock-center' ><hr className='updated-stock-hr' ></hr><div className='updated-stock-box'></div><hr className='updated-stock-hr' ></hr></center> 
        </div>

        <div className='updated-stock-block'>
          <span className='updated-stock-span' ><div className='updated-stock-box_1'></div></span>
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
export default UpdatedStock;