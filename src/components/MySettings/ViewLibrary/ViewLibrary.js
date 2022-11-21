import { Button } from "@mui/material";
import React from "react";
import AnimatedPage from "../../AnimatedPage";
// import Dashboard from "../../../Pages/Dashboard/Dashboard";
import MySettings from "../MySettings";
import "./profile_settings.scss";

export default function ViewLibrary() {
  return (
    <MySettings>
      <AnimatedPage>

      <div className="selfHelp_settings">
        <h4 className="heading">Uifry Library</h4>
        <p>Learn a few things about Uifry</p>
        <div className="form">
          <div className="help_container">
            <div className="help">
              <h3>About Uifry</h3>
            </div>
          </div>
          <div className="help_container">
            <div className="help">
              <h3>Visit FAQs</h3>
            </div>
          </div>
          <div className="help_container">
            <div className="help">
              <h3>Term of Use</h3>
            </div>
          </div>
          <div className="help_container">
            <div className="help">
              <h3>Privacy Policy</h3>
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
