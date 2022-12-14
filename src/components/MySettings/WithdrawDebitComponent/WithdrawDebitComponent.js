import { Button } from "@mui/material";
import React from "react";
import AnimatedPage from "../../AnimatedPage";
import MySettings from "../MySettings";
import "../WithdrawDebitComponent/notification.scss";

export default function WithdrawDebitComponent() {
  return (
    <MySettings>
      <AnimatedPage>
      <div className="notification_settings">
        <h4 className="heading">Notification Settings</h4>
        <p>Manage the kind pof messages you get from Uifry.</p>
        <div className="enable_disable">
          <i className="fa-solid fa-toggle-on fa-3x toggle"></i>
          <p>Disable Referral Notification</p>
        </div>
        <div className="enable_disable">
          <i class="fa-solid fa-toggle-on fa-3x toggle"></i>
          <p>Disable Rating Notification</p>
        </div>
        <Button className="button">UPDATE SETTINGS</Button>
      </div>
      </AnimatedPage>
    </MySettings>
  );
}
