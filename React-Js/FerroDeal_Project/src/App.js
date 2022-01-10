import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import FerroDealTc from './FerroDeal-TC-App';
import CreditFacilityTc from "./CDTC";
import passwordReset from "./password-reset-App";
import SwipeableTextMobileStepper from "./demo";
import GetQuote from "./Get_quote";
import Hotrolledpage from "./Hot_rolled._code";
import HRPOcode from "./HRPO_code";
import Coldrollpage from "./Cold_roll_code";
import Contact from "./Contact";

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
          <Route exact path="/passwordReset" component={passwordReset }/>
          <Route exact path="/SwipeableTextMobileStepper" component={SwipeableTextMobileStepper }/>
          <Route exact path="/GetQuote" component={GetQuote }/>
          <Route exact path="/Hotrolledpage" component={Hotrolledpage }/>
          <Route exact path="/HRPOcode" component={HRPOcode }/>
          <Route exact path="/Coldrollpage" component={Coldrollpage }/>
          <Route exact path="/Contact" component={Contact }/>
	     </Switch>
    </Router>

      
    );
  }
}

export default App;
