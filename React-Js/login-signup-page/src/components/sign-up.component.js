import React, { Component } from "react";
import SignupDataService from "../services/signup.service";
import "../index-signup.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangefname = this.onChangefname.bind(this);
    this.onChangepassword_confirmation = this.onChangepassword_confirmation.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangecompanyname = this.onChangecompanyname.bind(this);
    this.onChangegstnumber = this.onChangegstnumber.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onChangecreditdays = this.onChangecreditdays.bind(this);
    this.Signup = this.Signup.bind(this);
   

    this.state = {
      fname: '',
        password_confirmation: '',
        phone: '',
        password: '',
        companyname: '',
        gstnumber: '',
        type: '',
        creditdays: ''
    };
  }

  onChangefname(e) {
    this.setState({
      fname: e.target.value
    });
  }

  onChangepassword_confirmation(e) {
    this.setState({
      password_confirmation: e.target.value
    });
  }

  onChangephone(e) {
    this.setState({
        phone: e.target.value
    });
  }

  onChangepassword(e) {
    this.setState({
        password: e.target.value
    });
  }

  onChangecompanyname(e) {
    this.setState({
        companyname: e.target.value
    });
  }

  onChangegstnumber(e) {
    this.setState({
        gstnumber: e.target.value
    });
  }

  onChangetype(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangecreditdays(e) {
    this.setState({
      type: e.target.value
    });
  }

  Signup() {
    var data = {
      fname: this.state.fname,
      password_confirmation: this.state.password_confirmation,
      phone: this.state.phone,
        password: this.state.password,
        companyname: this.state.companyname,
        gstnumber: this.state.gstnumber,
        type: this.state.type,
        creditdays: this.state.creditdays,
    };

    SignupDataService.signup(data)
      .then(response => {
        this.setState({
          fname: response.data.fname,
          password_confirmation: response.data.password_confirmation,
          phone: response.data.phone,
            password: response.data.password,
            companyname: response.data.companyname,
            gstnumber: response.data.gstnumber,
            type: response.data.type,
            creditdays: response.data.creditdays,
          });
          console.clear();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return (

      <>

      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>   
          </div>

        ) : (    

          <div>


         <h3 className="signup-heading">Sign Up</h3>


         <div className="form-group">
              <label  className="text-color" htmlFor="phone">Phone number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your number..."
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangephone}
                name="phone"
              />
            </div>
          
            <div className="form-group">
              <label  className="text-color" htmlFor="fname">Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name..."
                id="fname"
                required
                value={this.state.fname}
                onChange={this.onChangefname}
                name="fname"
              />
            </div>

            <div className="form-group">
              <label className="text-color" htmlFor="companyname">Company name</label>
              <input
                type="text"
                className="form-control"
                id="companyname"
                placeholder="Enter firm name..."
                required
                value={this.state.companyname}
                onChange={this.onChangecompanyname}
                name="companyname"
              />
            </div>

            <div className="form-group">
              <label className="text-color" htmlFor="gstnumber">GST number</label>
              <input
                type="text"
                className="form-control"
                id="gstnumber"
                placeholder="Enter your gst number..."
                required
                value={this.state.gstnumber}
                onChange={this.onChangegstnumber}
                name="gstnumber"
              />
            </div>

            <div className="form-group">
              <label className="text-color" 
              htmlFor="type">Customer type</label>

              <select 
              type="text" 
              className="form-control" 
              placeholder="Select customer type..." 
              id="type"
              required
              value={this.state.type}
              onChange={this.onChangetype}
              name="customertype" >
                         <option>Select customer type... </option>
                         <option>Project/Manufacturer/consumers</option>
                         <option>Dealer/Trader</option>
                         </select>
            </div>


            <div className="form-group">
              <label className="text-color" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter 4 digit pin..."
                required
                value={this.state.password}
                onChange={this.onChangepassword}
                name="password"
              />
            </div>

            <div className="form-group">
              <label  className="text-color" htmlFor="password_confirmation">Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter 4 digit pin..."
                id="password_confirmation"
                required
                value={this.state.password_confirmation}
                onChange={this.onChangepassword_confirmation}
                name="password_confirmation"
              />
            </div>
           
            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" 
                        className="custom-control-input" 
                        id="creditdays" 
                        value={this.state.creditdays}
                        onChange={this.onChangecreditdays}
                        name="creditdays"
                        />
                        <label className="custom-control-label"
                         htmlFor="creditdays">Do you want credit facilities?</label>
                    </div>
                </div>

                <p className="facilities-T-C">
                <a href="#">Terms and conditions</a>
                </p>

            <button onClick={this.Signup} className="button">
              SIGNUP
            </button>


            <p className="forroDeal-T-C">
                    By clicking the "Signup" button, I agree to the FerroDeal <br /> <a href="#">Terms and conditions</a>
                </p>

                <p className="forroDeal-T-C">
                    Already registered <br /> <a href="#">Login</a>
                </p>
            
          </div>
          
        )}
      </div>
      </>
    );
  }
}
