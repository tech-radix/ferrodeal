import React, { useState, useEffect } from 'react';
import "./Slitted_Coil.css"
import FadeMenu from './Hamburger';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Slittedcoilformcode() {
  const [productDetails, setproductDetails] = useState([]);
  const [manufacturer, setmanufacturer] = useState([]);
  const [grades, setgrades] = useState([]);
  const [data, setData] = useState({
    values: {}
  })
  useEffect(() => {
    getApiData()
  }, []
  );
  const getApiData = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var categoryname = url.searchParams.get("category");
    //axios.get(`http://api.radixforce.com/api/getmg?token=1641463306772771&category={categoryname}`)
    axios.get(`http://api.radixforce.com/api/getmg?token=1641463306772771&category=Hot rolled (HR)`)  
    .then(response => {
        setproductDetails(response.data);
        const manufacturerData = response.data.result.manufacturer
        var array = manufacturerData.split(",");
        setmanufacturer(array);
        const gradesData = response.data.result.grades
        var array1 = gradesData.split(",");
        setgrades(array1)
      })
      .catch(error => console.error(error));
  }


  
  const sumbitSelected = async(e) => {
    e.preventDefault()
    const response = await axios({
      method: 'post',
      url: 'http://api.radixforce.com/api/savequote',
      data: data.values
  });
  }
  const handleChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      values: {
        ...data.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      }
    }));
  }
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
      <div className='slitted_coil_form_container'>
        <div className="deals"> Product details </div>
        <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>
        <form className='slitted_form_coil' onSubmit={sumbitSelected}>
          <div className='slitted_manufacturer'> <b className='slitted_lable_manufacturer'> Manufacturer: </b>
              <select onChange={handleChange} name="manufacturer">
              <option>Select....</option>
                {
                  manufacturer && manufacturer.length ?
                  manufacturer.map((e) =>
                      <option
                        value={e}>{e}
                      </option>) : null
                }
              </select></div>
          <div className='slitted_grade'> <b className='slitted_lable_grade'> Grade: </b>
            <select onChange={handleChange} name="grade">
            <option>Select....</option>
              {
                grades && grades.length ?
                  grades.map((e) =>
                    <option
                      value={e}>{e}
                    </option>) : null
              }
            </select></div>

            <div className='slitted_thick'> <b className='slitted_lable_thickness'> Thickness (mm): </b>
            <input type="number"
             onChange={handleChange}
             value={data.values.thickness || ""}
             name="thickness"
             />
          </div>

         
          <div className='slitted_thick'> <b className='slitted_lable_width'> Width(mm) </b>
            <input type="number"
             onChange={handleChange}
             value={data.values.width || ""}
             name="width"
             />
          </div>

          <div className='slitted_trimming'> <b className='slitted_trimming'> Trimming </b>
            <select onChange={handleChange} name="paymentCredit">
              <option>Select....</option>
              <option>Trimmed</option>
              <option>Untrimmed</option>
            </select>
          </div>
         
         
          <div className='slitted_quantity'> <b className='slitted_lable_quantity'> Quantity (MT): </b>
            <input type="number"
             onChange={handleChange}
             value={data.values.quantity || ""}
             name="quantity"/>
          </div>

          <div className='slitted_payment'> <b className='slitted_lable_payment'> Payment Credit: </b>
            <select onChange={handleChange} name="paymentCredit">
              <option>Select....</option>
              <option>7 Days</option>
              <option>10 Days</option>
              <option>15 Days</option>
              <option>21 Days</option>
              <option>30 Days</option>
            </select>
          </div>
          <button className='slitted_add_to_cart' type='submit' onClick={sumbitSelected}> <i class='fas fa-cart-plus'></i> ADD TO CART </button>
          <button className='slitted_cancel_quote'>CANCEL QUOTE</button>
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
export default Slittedcoilformcode;
