import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Contact from "./Contact";
import Front from './Front_page'
import Partner from "./Be_a_partner";
import Get  from "./Get_quote";
import BuySell from "./Buy_sell";
import Stock from "./Update_stock";
import Upload from "./Upload_stock"
import Hotrolled from "./Hot_rolled_app"
import HRPO from "./HRPO_app"
import ColdRoll from "./Cold_roll_app"


const App = () =>{

    return (
     

        <>

        <Switch>
        <Route exact path="/" component={Front} />
<Route exact path="/home" component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/be_a_partner" component={Partner} />
<Route path="/getquote" component={Get} />
<Route path="/buy_sell_scrap" component={BuySell} />
<Route path="/updatedstock" component={Stock} />
<Route path="/updloadstock" component={Upload} />
<Route path="/hot_rolled" component={Hotrolled} />
<Route path="/hrpo" component={HRPO} />
<Route path="/cold_rolled" component={ColdRoll} />




</Switch>
</>
      
    );
  }


export default App;
