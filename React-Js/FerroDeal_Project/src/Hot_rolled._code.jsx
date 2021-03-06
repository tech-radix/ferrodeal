import * as React from 'react';
import "./hot_rolled.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function Hotrolledpage() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var categoryname = url.searchParams.get("category");
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
      <div className='hot-rolled-product'>
        <div className="hot-rolled-heading">HR Product Type</div>
        <center className='hot-rolled-center' ><hr className='hot-rolled-hr' ></hr><div className='hot-rolled-box'></div><hr className='hot-rolled-hr' ></hr></center>

        <center><button className="hot-rolled-button-1"> Please select produt type </button></center>

        <div className='hot-rolled-block'>
          <span className='hot-rolled-span' ><Link to={`/coilform?category=${categoryname}&subcategory=Coil`}><div className='hot-rolled-box_1'></div><h3 className='hot-rolled-h3' >Coil </h3></Link></span>
          <span className='hot-rolled-span' ><Link to="/sheetform"><div className='hot-rolled-box_2'></div><h3 className='hot-rolled-h3' > Sheet/Plate </h3></Link></span>
         
        </div>
        <div className='hot-rolled-block_2'>
          <span className='hot-rolled-span' ><Link to="/Slittedcoilformcode"><div className='hot-rolled-box_4'></div><h3 className='hot-rolled-h3' > Slitted Coil </h3></Link></span>
          <span className='hot-rolled-span' ><Link to="/CutToSizeFormCode"><div className='hot-rolled-box_5'></div><h3 className='hot-rolled-h3' > Cut to Size</h3></Link></span>
          
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
export default Hotrolledpage;