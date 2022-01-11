import * as React from 'react';
import "./coil_form.css"
import FadeMenu from './Hamburger';
import {Link} from 'react-router-dom';


function Coilformcode() {

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
      <div className='coil_form_container'>
      <div className="deals"> Product details </div>
      <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>
      <form className='form_coil'>

  <div className='manufacture'> <b className='lable_coil'> Manufature: </b> <select>
          <option>Select....</option>
         <option>JSW/AMNS/TATA/BHUSHAN</option>
          <option>UTTAM/SAIL/JSPL</option>
          <option>ANY ONE</option>
</select></div> 

<div className='grade'> <b className='lable_grade'> Grade: </b> <select>
          <option>Select....</option>
        <option>IS 10748</option>
          <option>IS2062 - E250 / IS 1079</option>
          <option>Chequerred</option>
          <option>IS2062 - E350 (HT52.5 /SAPH/QST/E355MC)</option>
          <option>BSK-46</option>
          <option>Domex/Strenx</option>
          <option>Hardox</option>
</select></div> 

<div className='thick'> <b className='lable_thickness'> Thickness (mm): </b> 
<input type="number"></input>
          
</div> 

<div className='quantity'> <b className='lable_quantity'> Quantity (MT): </b> 
<input type="number"></input>
          
</div> 

<div className='payment'> <b className='lable_payment'> Payment Credit: </b> <select>
          <option>Select....</option>
        <option>7 Days</option>
          <option>10 Days</option>
          <option>15 Days</option>
          <option>21 Days</option>
          <option>30 Days</option>
        
</select></div> 
    
    <button className='add_to_cart'> <i class='fas fa-cart-plus'></i> ADD TO CART </button>
    <button className='cancel_quote'>CANCEL QUOTE</button>
      </form>
       
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
export default Coilformcode;