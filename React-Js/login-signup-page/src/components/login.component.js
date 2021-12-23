import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label className="text-color">Phone number</label>
                    <input type="tel" className="form-control" placeholder="Enter registered mobile number" />
                </div>

                <div className="form-group">
                    <label className="text-color">Password</label>
                    <input type="password" className="form-control" placeholder="Enter 4 digit pin" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="button">LOGIN</button>

                <p className="forgot-password text-right" >
                     <a href="#">FORGOT PASSWORD?</a>
                </p>

                <p className="signup-at-login" >
                 <a href="#">SIGNUP</a>
                </p>
            </form>
        );
    }
}