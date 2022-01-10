import * as React from 'react';
import "./get-quote.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function GetQuote() {

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
      <div className='get-quote-product'>
        <div className="get-quote-heading">Material Type</div>
        <center className='get-quote-center' ><hr className='get-quote-hr' ></hr><div className='get-quote-box'></div><hr className='get-quote-hr' ></hr></center>

        <center><button className="get-quote-button-1"> Please select material type </button></center>

        <div className='get-quote-block'>
        <span className='get-quote-span' ><Link to="/Hotrolledpage"><div className='get-quote-box_1'></div><h3 className='get-quote-h3' >Hot rolled - HR </h3></Link></span>
          <span className='get-quote-span' ><Link to="/HRPOcode"><div className='get-quote-box_2'></div><h3 className='get-quote-h3' > HRPO </h3></Link></span>
          <span className='get-quote-span' ><Link to="/Coldrollpage"><div className='get-quote-box_3'></div><h3 className='get-quote-h3' >Cold rolled - CR</h3></Link></span>
        </div>
        <div className='get-quote-block_2'>
          <span className='get-quote-span' ><div className='get-quote-box_4'></div><h3 className='get-quote-h3' > Galvanized - GAL </h3></span>
          <span className='get-quote-span' ><div className='get-quote-box_5'></div><h3 className='get-quote-h3' > Color Coated</h3></span>
          <span className='get-quote-span' ><div className='get-quote-box_6'></div><h3 className='get-quote-h3' > TMT BARS </h3></span>
        </div>
        <div className='get-quote-block_3'>
          <span className='get-quote-span' ><div className='get-quote-box_7'></div><h3 className='get-quote-h3' > MS STRUCTURES </h3></span>
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
export default GetQuote;