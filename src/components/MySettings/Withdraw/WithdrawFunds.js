import { Button } from "@mui/material";
import React from "react";
import MySettings from "../MySettings";
import "./withdraw.scss";

export default function WithdrawFunds() {
  return (
    <MySettings>
      <div className="withdraw">
        <h3>SELECT A WALLET TO WITHDRAW FROM</h3>

        <div className="balances">
          <div className="balance">
            <h3>Available Flex Balance: #200.88</h3>
            <p>Simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
          </div>
          <div className="balance">
            <h3>Uifry Balance: #200.88</h3>
            <p>Simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
          </div>
        </div>

        <p className="grey">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <hr />
        <Button className="button">CLOSE</Button>
      </div>
    </MySettings>
  );
}
