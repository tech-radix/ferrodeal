import React, { Component } from "react";

export default class Login extends Component {


    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserLoginForm = this.submituserLoginForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserLoginForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
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

  
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your number.";
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
            <>

           {//<div className="img" > </div>
           } 

            <h3>Login</h3>

            <form method="post"  name="userLoginForm"  onSubmit= {this.submituserLoginForm}>
                <div className="form-group">
                    <label className="text-color">Phone number</label>
                    <input type="tel" className="form-control" placeholder="Enter registered mobile number" value={this.state.fields.mobileno} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                </div>

                <div className="form-group">
                    <label className="text-color">Password</label>
                    <input type="password" className="form-control" placeholder="Enter 4 digit pin" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>


              <button type="submit" className="button">LOGIN</button>

               { //<input type="submit" className="button"  value="Signup"/>
            }

                <p className="forgot-password text-right" >
                     <a href="#">FORGOT PASSWORD?</a>
                </p>

                <p className="signup-at-login" >
                 <a href="#">SIGNUP</a>
                </p>
            </form>
            </>
        );
    }
}