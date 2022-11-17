import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MySettings from "../MySettings";

export default function WithdrawBankSettings() {
  return (
    <MySettings>
      <div className="card_settings">
        <h4 className="heading">My Withdrawal Account</h4>

        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters as a more-or-less normal distribution
        </p>
        <div className="card_details">
          <div className="card_content">
            <p>1234567890</p>
            <span className="span">
              <p>GTB</p>
            </span>
          </div>
        </div>

        <Link to='/dashboard/Withdraw_settings'>  <Button className="add_button">UPDATE BANK</Button></Link>
        <hr />

        <Button className="button">CLOSE</Button>
      </div>
    </MySettings>
  );
}
