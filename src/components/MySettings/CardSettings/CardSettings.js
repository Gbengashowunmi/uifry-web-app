import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MySettings from "../MySettings";
import "./card.scss";

export default function Debit() {
  return (
    <MySettings>
        <div className="card_settings">
          <h4 className="heading">Manage Card & Bank Settings</h4>
          <p>Fix some of your account issues. More options coming soon</p>

          <div className="form">
            <Link to='/dashboard/DebitCard_settings'>
            <div className="settings">
              <div className="help">
                <h3>Debit Cards</h3>
              </div>
            </div>
            </Link>
            <Link to='/dashboard/Withdraw_bank_settings'>
            <div className="settings">
              <div className="help">
                <h3>Withdraw Bank Settings</h3>
              </div>
            </div>
            </Link>
          </div>
          <hr />
          <Button className="button">CLOSE</Button>
        </div>
      
    </MySettings>
  );
}
