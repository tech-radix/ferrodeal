import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";


class App extends Component {
  render() {
    return (
      <div>
      

        <div className="container mt-3">

        <SignIn />

      {/*  <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
       </Switch>
*/}

        </div>
      </div>
    );
  }
}

export default App;
