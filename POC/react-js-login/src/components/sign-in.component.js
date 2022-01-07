import React, { Component } from "react";
import LoginDataService from "../services/login.service";

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
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangephone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.Login} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
