import { Button } from "@mui/material";
import React from "react";
import '../TodaysRate/todaysrate.scss'
import MySettings from "../MySettings";

export default function TodaysRate() {
  return (
    <MySettings> 
      <div className="todays_settings">
        <h4 className="heading">Today's  Rate</h4>
        <p>November 14th by 09:09Am (Lagos).</p>
        <p>Current Rate across all Products. Updated daily</p>

          <div className="form"> 

<div className="rate_container">
  <div className="rate_details">
    <h3>Flex Savings Interest</h3>
    <p>15% p.a</p>
  </div>
</div> 
<div className="rate_container">
  <div className="rate_details">
    <h3>Fixed Savings Interest</h3>
    <p>20-30% p.a</p>
  </div>
</div>
<div className="rate_container">
  <div className="rate_details">
    <h3>Target Savings Interest</h3>
    <p>10% p.a</p>
  </div>
</div>
<p className="center">
  Rates are subject to charge at anytime without prior notice. Please check this page everyday to stay updated
</p>
          </div>
          <hr />
          <Button className="button">CLOSE</Button>
      </div>
    </MySettings>
  );
}
