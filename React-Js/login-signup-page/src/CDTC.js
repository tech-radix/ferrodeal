import React, { Component } from "react";
import "./CDTC.css";

export default class CreditFacilityTc extends Component {
 
  render() {
    return (
      <> 
          <div className="CDTC-auth-inner">

         <h3 className="CDTC-heading">T&C</h3>
          
         <ol>
  <li className="CDTC-li" >Last 2 year Financials and current year provisional balance sheets.</li>
  <li className="CDTC-li" >Last 6 months all bank statement.</li>
  <li className="CDTC-li" >Proprietor KYC (pan and aadhar).</li>
  <li className="CDTC-li" >Post dated Cheque (PDC) with out date as security.</li>
        </ol>
            
         <button className="CDTC-button"> OK </button>
            
          </div>   
      </>
    );
  }
}
