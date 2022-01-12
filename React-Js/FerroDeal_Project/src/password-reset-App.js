
import "./password-reset.css"
import React, { Component } from "react";

export default class passwordReset extends Component {

  render() {
  return (
    <>
    <div className="password-reset-outer-space-1" >
        <div className='password-reset-auth-inner-1' >  

        <div className='password-reset-product-1'>
        <div className="password-reset-heading-1">Password Reset</div>
        <div className="password-reset-para-1"><p>Enter your email address and we'll send you instructions on how to reset your password.</p></div>    
        

        <div className="password-reset-form-group-1">
        <div className="password-reset-email-heading-1" >Email</div>
              <input className="password-reset-email-input-1" type="email" placeholder="Enter your email..."  id="email" name="email"/>
              <input className="password-reset-submit-button-1" type="submit"></input>
            </div>
            <div className="password-reset-login-1" >CANCEL</div>
            </div>  
</div>    
</div>  

    </>
  );
}
}
