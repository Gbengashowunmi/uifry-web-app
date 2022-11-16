import { Button } from "@mui/material";
import React from "react";
import MySettings from "../MySettings";
import "./refer.scss";

export default function Refer() {
  return (
    <MySettings>
      <div className="refer">
        <h5 className="center">My Referal Earnings</h5>
        <h4 className="heading">#2,000.00</h4>
        <h5 className="center">ABOUT REFERALS</h5>
        <div className="earnings">
          <div className="earning">
            <h4>#2,000.00</h4>
            <p>Pending Earnings</p>
          </div>
          <div className="earning">
            <h4>#0.00</h4>
            <p>Paid Earnings</p>
          </div>
        </div>

        <div className="referal_messages">
          <h3>COPY REFERAL MESSAGE</h3>
          <div className="referal_message">
            <p>
              I use Uifry I use Uifry I use Uifry I use Uifry I use Uifry I use
              Uifry I use Uifry I use Uifry I use Uifry
            </p>
          </div>
        </div>

        <div>
          <h3>PENDING BONUS SAFELOCKS</h3>
          <div className="referal_message">
            <span className="span">
              <p className='grey'>Referal bonus- Gbenga S</p> <p> Days left</p>
            </span>
            <span className="span">
              <h5>#1,000.00</h5> <h5>N/A</h5>{" "}
            </span>
          </div>
          <div className="referal_message">
            <span className="span">
              <p className='grey'>Referal bonus- Gbenga S</p> <p> Days left</p>
            </span>
            <span className="span">
              <h5>#1,000.00</h5> <h5>N/A</h5>{" "}
            </span>
          </div>
        </div>
        <hr />
        <Button className="button">CLOSE</Button>
      </div>
    </MySettings>
  );
}
