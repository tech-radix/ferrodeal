import * as React from 'react';
import "./get-quote.css"


function SwipeableTextMobileStepper() {

  return (
    <>
      <div className="nav_bar">

        <nav>
        <div className='nav_image'>
          <div className='logo'></div>
        </div>
        <div class="menu">
           <li>Home</li>
          <li>Cart</li>
          <li>Order history</li>
          <li>Contact</li>
          </div>
          <div className="side_nav"><i class="fa fa-tasks"></i></div>
          </nav>
      </div>

      <div className='product'>
        <div className="heading">Material Type</div>
        <center><hr></hr><div className='box'></div><hr></hr></center>

        <center><button className="button-1"> Please select material type </button></center>

        <div className='block'>
          <span><div className='box_1'></div><h3>Hot rolled - HR </h3></span>
          <span><div className='box_2'></div><h3> HRPO </h3></span>
          <span><div className='box_3'></div><h3>Cold rolled - CR</h3></span>
        </div>
        <div className='block_2'>
          <span><div className='box_4'></div><h3> Galvanized - GAL </h3></span>
          <span><div className='box_5'></div><h3> Color Coated</h3></span>
          <span><div className='box_6'></div><h3> TMT BARS </h3></span>
        </div>
        <div className='block_3'>
          <span><div className='box_7'></div><h3> MS STRUCTURES </h3></span>
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
export default SwipeableTextMobileStepper;