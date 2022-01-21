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
import BeApartner from "./Be_a_partner";
import BuySellScrap from "./buy-sell-scrap-App";
import Uploadstock from "./upload-stock-App";
import UpdatedStock from "./Update_stock";
import FadeMenu from "./Hamburger";
import FrontPage from "./frontpage";
import Coilform from "./Coil_form_app";
import Slittedcoilformcode from "./Slitted_Coil";
import CutToSizeFormCode from "./cut_to_size";
import CRCACoilFormCode from "./CRCA_COIL"

class App extends Component {
  render() {
    return ( 
       
    <Router>
       <Switch>FrontPage
		      <Route exact path="/" component={FrontPage }/>
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
          <Route exact path="/BeApartner" component={BeApartner }/>
          <Route exact path="/BuySellScrap" component={BuySellScrap }/>
          <Route exact path="/Uploadstock" component={Uploadstock }/>
          <Route exact path="/UpdatedStock" component={UpdatedStock }/>
          <Route exact path="/FadeMenu" component={FadeMenu }/>
          <Route exact path="/coilform" component={Coilform }/>
          <Route exact path="/Slittedcoilformcode" component={Slittedcoilformcode }/>
          <Route exact path="/CutToSizeFormCode" component={CutToSizeFormCode }/>
          <Route exact path="/CRCACoilFormCode" component={CRCACoilFormCode }/>
	     </Switch>
    </Router>
      
    );
  }
}

export default App;
