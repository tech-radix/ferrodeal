import React, { Component } from "react";

export default class SignUp extends Component {

  //  import React from 'react';
   // import './style.css';
    
  //  class RegisterForm extends React.Component {
        constructor() {
          super();
          this.state = {
            fields: {},
            errors: {}
          }
    
          this.handleChange = this.handleChange.bind(this);
          this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    
        };
    
        handleChange(e) {
          let fields = this.state.fields;
          fields[e.target.name] = e.target.value;
          this.setState({
            fields
          });
    
        }
    
        submituserRegistrationForm(e) {
          e.preventDefault();
          if (this.validateForm()) {
              let fields = {};
              fields["username"] = "";
              fields["emailid"] = "";
              fields["mobileno"] = "";
              fields["password"] = "";
              fields["companyname"] = "";
              fields["gstnumber"] = "";
              fields["customertype"] = "";
              this.setState({fields:fields});
              alert("Form submitted");
          }
    
        }
    
        validateForm() {
    
          let fields = this.state.fields;
          let errors = {};
          let formIsValid = true;
    
          if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your full name.";
          }

    
          if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["username"] = "*Please enter alphabet characters only.";
            }
          }
    
          if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
          }
    
          if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
              formIsValid = false;
              errors["emailid"] = "*Please enter valid email-ID.";
            }
          }
    
          if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
          }
    
          if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
              formIsValid = false;
              errors["mobileno"] = "*Please enter valid number.";
            }
          }
    
          if (!fields["companyname"]) {
            formIsValid = false;
            errors["companyname"] = "*Please enter your company name.";
          }

          if (!fields["gstnumber"]) {
            formIsValid = false;
            errors["gstnumber"] = "*Please enter your gst number.";
          } 

          if (!fields["customertype"]) {
            formIsValid = false;
            errors["customertype"] = "*Please select your customer type.";
          }


          if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
          }
  
    
          this.setState({
            errors: errors
          });
          return formIsValid;
    
    
        }
    
  




    render() {        
        return (

            <div id="main-registration-container">
            <div id="register">
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="text-color">Full name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name..." name="username" value={this.state.fields.username} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.username}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Phone number</label>
                    <input className="form-control" placeholder="Enter your number..." type="tel" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Email address</label>
                    <input type="email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} className="form-control" placeholder="Enter email..." />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Company name</label>
                    <input type="text" className="form-control" placeholder="Enter firm name..." name="companyname" value={this.state.fields.companyname} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.companyname}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">GST number</label>
                    <input type="number" className="form-control" placeholder="Enter your gst number..." name="gstnumber" value={this.state.fields.gstnumber} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.gstnumber}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Customer type</label>
                    <select type="text" className="form-control" placeholder="Select customer type..." name="customertype" value={this.state.fields.customertype} onChange={this.handleChange} >
                         <option>Select customer type... </option>
                         <option>Project/Manufacturer/consumers</option>
                         <option>Dealer/Trader</option>
                         </select>
                         <div className="errorMsg">{this.state.errors.customertype}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Password</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}  className="form-control" placeholder="Enter 4 digit pin..." />
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>
              

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Do you want credit facilities?</label>
                    </div>
                </div>


               <p className="facilities-T-C">
                <a href="#">Terms and conditions</a>
                </p>
        
                <input type="submit" className="button"  value="Signup"/>

               {/* <button class="button">SignUp</button> */ }

                <p className="forroDeal-T-C">
                    By clicking the "Signup" button, I agree to the FerroDeal <br /> <a href="#">Terms and conditions</a>
                </p>

                <p className="forroDeal-T-C">
                    Already registered <br /> <a href="#">Login</a>
                </p>
            </form>
            </div>
    </div>
        );
    }
}