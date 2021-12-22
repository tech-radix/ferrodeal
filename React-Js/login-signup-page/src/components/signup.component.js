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
            errors["username"] = "*Please enter your username.";
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
              errors["mobileno"] = "*Please enter valid mobile no.";
            }
          }
    
          if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
          }
    
          if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              errors["password"] = "*Please enter secure and strong password.";
            }
          }
    
          this.setState({
            errors: errors
          });
          return formIsValid;
    
    
        }
    
    /*
    
      render() {
        return (
        <div id="main-registration-container">

         <div id="register">

            <h3>Registration page</h3>

            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

            <label>Name</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
            <div className="errorMsg">{this.state.errors.mobileno}</div>

            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>

            <input type="submit" className="button"  value="Register"/>

            </form>
        </div>
    </div>
    
          );
      }
    
    
    }
    
    
    export default RegisterForm;

*/


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
                    <input type="text" className="form-control" placeholder="Enter firm name..." />
                </div>

                <div className="form-group">
                    <label className="text-color">GST number</label>
                    <input type="number" className="form-control" placeholder="Enter your gst number..." />
                </div>

                <div className="form-group">
                    <label className="text-color">Customer type</label>
                    <select type="text" className="form-control" placeholder="Select customer type..." >
                         <option>Select customer type... </option>
                         <option>Project/Manufacturer/consumers</option>
                         <option>Dealer/Trader</option>
                         </select>
                </div>

                <div className="form-group">
                    <label className="text-color">Password</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}  className="form-control" placeholder="Enter password" />
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>
              
               <div>
                <input type="checkbox" id="myCheck" />
                <button className="checkbox" onclick="check()">Do you want credit facilities?</button>
               </div>

               <p className="facilities-T-C">
                <a href="#">Terms and conditions</a>
                </p>
        
                <input type="submit" className="button"  value="Signup"/>

               {/* <button class="button">SignUp</button> */ }

                <p className="forroDeal-T-C">
                    By clicking the "Signup" button, I agree to the FerroDeal <br /> <a href="#">Terms and conditions</a>
                </p>

                <p className="forgot-password text-right">
                    Already registered <br /> <a href="#">Login</a>
                </p>
            </form>
            </div>
    </div>
        );
    }
}