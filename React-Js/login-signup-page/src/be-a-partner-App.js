import * as React from 'react';
import "./be-a-partner.css"


function BeApartner() {

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

      <div className='be-a-partner-product'>
        <div className="be-a-partner-heading">Be a partner</div>
        <center  className='be-a-partner-center' ><hr className='be-a-partner-hr'></hr><div className='be-a-partner-box'></div><hr className='be-a-partner-hr'></hr></center>
        </div>


        <div className='be-a-partner-product-2'>
        <div className="be-a-partner-heading-2"><b>Contact number: +91 9685642619</b></div>
        </div>

        <div className='be-a-partner-product-5'>
        <div className="be-a-partner-heading-5"><h5>We, FerroDeal is a pioneer and leading e-commerce business to business online steel trading platform in MP.<br /><br />
 We are happy to joining you with more than 1000 Steel consumers and retailers accross Madhya Pradesh and it’s all manufacturing and trading hubs like Pithampur, Sawver road, Dewas, Govindpura etc.<br /><br />
We are looking for our association with you to cater to all customers in this on line platform by tendering your materials and services like products and transportation accross India.
<br /><br />Please contact with us for further information and details.</h5></div>
        </div>


        <div className='be-a-partner-product-3'>
        <center><b><p>Tell us about yourself (Optional)</p></b> </center>
        <div className="be-a-partner-heading-3"><textarea className='be-a-partner-textarea' rows="2" cols="50" placeholder="Short description about you..."></textarea></div>
        </div>

        <div className='be-a-partner-product-3'>
        <div className="be-a-partner-heading-3"> <b> Interested? </b> </div>
        </div>

        <div className='be-a-partner-product-4'>
        <div className="be-a-partner-heading-4">Become a partner and avail exclusive benifits</div>
        </div>


        <center><button className="be-a-partner-button">YES TAKE ME IN</button></center>
      

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
export default BeApartner;