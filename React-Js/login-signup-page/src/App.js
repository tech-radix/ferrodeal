import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import FerroDealTc from './FerroDeal-TC-App';
import CreditFacilityTc from "./CDTC";


class App extends Component {
  render() {
    return (
      
       
       
    <Router>
       <Switch>
		      <Route exact path="/" component={SignUp}/>
				  <Route exact path="/SignIn" component={SignIn }/>
          <Route exact path="/SignUp" component={SignUp }/>
          <Route exact path="/FerroDealTc" component={FerroDealTc }/>
          <Route exact path="/CreditFacilityTc" component={CreditFacilityTc }/>
	     </Switch>
    </Router>

      
    );
  }
}

export default App;
