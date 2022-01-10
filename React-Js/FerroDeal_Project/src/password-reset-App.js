
import "./password-reset.css"
import React, { Component } from "react";

export default class passwordReset extends Component {

  render() {
  return (
    <>
    <div className="password-reset-outer-space" >
        <div className='password-reset-auth-inner' >  

        <div className='password-reset-product'>
        <div className="password-reset-heading">Password Reset</div>
        <div className="password-reset-para"><p>Enter your email address and we'll send you instructions on how to reset your password.</p></div>    
        

        <div className="password-reset-form-group">
        <div className="password-reset-email-heading" >Email</div>
              <input className="password-reset-email-input" type="email" placeholder="Enter your email..."  id="email" name="email"/>
              <input className="password-reset-submit-button" type="submit"></input>
            </div>
            <div className="password-reset-login" >CANCEL</div>
            </div>  
</div>    
</div>  

    </>
  );
}
}
