import React, { Component } from "react";
import LoginDataService from "../services/login.service";
import "../index-signin.css";
import { Link } from 'react-router-dom';



export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.Login = this.Login.bind(this);
   

    this.state = {
      phone: '',
      password: ''      
    };
  }

  onChangephone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  Login() {
    var data = {
      phone: this.state.phone,
      password: this.state.password
    };

    LoginDataService.login(data)
      .then(response => {
        this.setState({
          phone: response.data.phone,
          password: response.data.password,
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
     <div className="sign-in-color" >
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
          </div>
          
        ) : (
          
          <div className="signin-auth-inner">

          <center>
          <img className="img-logo"> 
          </img>     
         </center>

         <h3 className="login-heading">Login</h3>
          
            <div className="form-group">
              <label  className="text-color" htmlFor="phone">Phone number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registered mobile number"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangephone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label className="text-color" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter 4 digit pin"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.Login} className="button"> LOGIN
</button>

<div className="forgot-password" >
<Link to='/passwordReset'>FORGOT PASSWORD?</Link>
</div>

<div className="signup-at-login" >
<Link to='/SignUp'>SignUp</Link>
                </div>
            
                <div className="signup-at-login" >
                <Link to='/SwipeableTextMobileStepper'>Home</Link>
                </div>

          </div>
          
        )}
      </div>
      </div>
      </>
    );
  }
}
