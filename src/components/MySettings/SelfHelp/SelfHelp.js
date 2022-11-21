import { Button } from "@mui/material";
import React from "react";
import '../SelfHelp/selfHelp.scss'
import MySettings from "../MySettings";
import AnimatedPage from "../../AnimatedPage";

export default function TodaysRate() {
  return (
    <MySettings> 
    <AnimatedPage>

      <div className="selfHelp_settings">
        <h4 className="heading">Uifry Self Help</h4>
        <p>Fix some of your account issues. More options coming soon</p>

          <div className="form"> 

<div className="help_container">
  <div className="help">
    <h3>Fix an Account Issue</h3>
  </div>
</div> 
<div className="help_container">
  <div className="help">
    <h3>Fix a PayStack Transaction</h3>
  </div>
</div>
<div className="help_container">
  <div className="help">
    <h3>Fix a Flex Transaction</h3>
  </div>
</div>
<div className="help_container">
  <div className="help">
    <h3>Fix Autosave Double Credits</h3>
  </div>
</div>
<div className="help_container">
  <div className="help">
    <h3>Fix Interest Issue</h3>
  </div>
</div>
<div className="help_container">
  <div className="help">
    <h3>Matured Safelock Not Paid</h3>
  </div>
</div>

          </div>
          <hr />
          <Button className="button">CLOSE</Button>
      </div>
    </AnimatedPage>
    </MySettings>
  );
}
