import * as React from 'react';
import "./buy-sell-scrap.css"


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
        <div className="heading">Buy/Sell scrap</div>
        <center><hr></hr><div className='box'></div><hr></hr></center>
        </div>


        <div className='product-2'>
        <div className="heading-2">Do you want to Sell scrap or Buy scrap?</div>
        </div>
        
        <center><button className="button-1"><i className="fas fa-dollar-sign"></i> SELL SCRAP </button></center>

        <center><button className="button-2"><i className="fas fa-shopping-cart"></i> BUY SCRAP </button></center>

        <center><button className="button-3"><i class="fas fa-sync-alt"></i> SCRAPS IN STOCK </button></center>
      

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