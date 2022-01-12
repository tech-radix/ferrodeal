import React, { Component } from "react";
import "./CDTC.css";

export default class CreditFacilityTc extends Component {
 
  render() {
    return (
      <> 
          <div className="CDTC-auth-inner-1">

         <h3 className="CDTC-heading-1">T&C</h3>
          
         <ol>
  <li className="CDTC-li-1" >Last 2 year Financials and current year provisional balance sheets.</li>
  <li className="CDTC-li-1" >Last 6 months all bank statement.</li>
  <li className="CDTC-li-1" >Proprietor KYC (pan and aadhar).</li>
  <li className="CDTC-li-1" >Post dated Cheque (PDC) with out date as security.</li>
        </ol>
            
         <button className="CDTC-button-1"> OK </button>
            
          </div>   
      </>
    );
  }
}
