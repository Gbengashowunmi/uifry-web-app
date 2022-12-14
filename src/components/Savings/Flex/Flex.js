// import { Link } from '@mui/material';
import { Button, TextField } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import GeneralDashboard from "../../../Pages/GeneralDashboard/GeneralDashboard";
import TransitionsModal from "../../Modal";
import OtpInsturction from "../../MyAccount/SecurityQuestion/OtpInsturction";
import "./Flex.scss";

export default function Flex() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <GeneralDashboard>
      <div className="flex">
        <h3 className="lp">Flex</h3>
        <ul>
          <NavLink to="/GeneralDashboard/settings/savings/flex">
            <li>
              <img src="/images/flex_icon.png" alt="flex" />
              Flex
            </li>
          </NavLink>
          <Link to="/GeneralDashboard/settings/savings/fixed">
            {" "}
            <li>
              {" "}
              <img src="/images/flex_icon.png" alt="fixed" />
              Fixed
            </li>
          </Link>
          <Link to="/GeneralDashboard/settings/savings/autoSave">
            <li>
              <img src="/images/flex_icon.png" alt="flex" />
              AutoSave
            </li>
          </Link>
          <Link to="/GeneralDashboard/settings/savings/target">
            <li>
              <img src="/images/flex_icon.png" alt="flex" /> Target
            </li>
          </Link>
          <Link to="/GeneralDashboard/settings/savings/flex_dollars">
            <li>
              <img src="/images/flex_icon.png" alt="flex" />
              Flex Dollars
            </li>
          </Link>
          <Link to="/GeneralDashboard/settings/savings/flex_pounds">
            {" "}
            <li>
              <img src="/images/flex_icon.png" alt="flex" />
              Flex Pounds
            </li>
          </Link>
        </ul>

        <main>
          <div className="left">
            <div className="top">
              <div className="up">
                <p>FLEX ACCOUNT (8%)</p>
                <h3>???16.88</h3>
                <p>
                  Available Balance:<strong>???16.88</strong>
                </p>
              </div>

              <div className="mid" onClick={handleOpen}>
                <p>New Label</p>
                <hr />
                <p>Withdrawal</p>
              </div>

              <div className="down">
                <div className="down_left">
                  <p>Interest in 8days</p>
                  <p>
                    <strong>???0.03</strong> at (8% p.a)
                  </p>
                </div>
                <div className="down_right" >
                  <p>withdrawals</p>
                  <p>
                    <strong>0</strong>this month
                  </p>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="heading_btns">
                <p>
                  <strong>TRANSACTIONS</strong>
                </p>
                <div className="btns">
                  <button> All</button>
                  <button> Credit</button>
                  <button> Debit</button>
                </div>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/red.png" alt="red" />
                  <div className="transaction_action">
                    <p>
                      <strong>Withdrawal Made</strong>
                    </p>
                    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
                  </div>
                </div>
                <p className="amount">???900.32</p>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/green.png" alt="green" />

                  <div className="transaction_action">
                    <p>
                      <strong>Transfer From Gbenga Showunmi</strong>
                    </p>
                    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
                  </div>
                </div>

                <p className="amount">???900.32</p>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/red.png" alt="red" />

                  <div className="transaction_action">
                    <p>
                      <strong>Withdrawal Made</strong>
                    </p>
                    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
                  </div>
                </div>

                <p className="amount">???900.32</p>
              </div>

              <button className="view_more"> VIEW MORE TRANSACTIONS</button>
            </div>
          </div>
          <div className="right">
            <p>ACCOUNT NUMBER</p>
            <h4>7820868560</h4>
            <p>WEMA BANK</p>
            <hr />
            <p>
              <img src="/images/copy.png" alt="copy" /> Copy
            </p>
          </div>
        </main>
        <TransitionsModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        >
          <div>
            <h3>Withdraw to your Pocket</h3>
            <p>Available Flex Balance is:#23,489</p>
            <h3>Use the for belowto withdraw from your flex savings  instantly.</h3>
        <OtpInsturction/>
          <div>
          <TextField id="filled-basic" label="Amount to withdraw (min:#2,000)" variant="filled" />
          <TextField id="filled-basic" label="Please Enter Generated OTP" variant="filled" />
          <TextField id="filled-basic" label="For security reasons, Enter password" variant="filled" />

          </div> 
          <Button className="button">WITHDRAW NOW</Button>
          <Button className="button"  onClick={handleClose}>CANCEL</Button>

          </div>
        </TransitionsModal>
      </div>
    </GeneralDashboard>
  );
}
