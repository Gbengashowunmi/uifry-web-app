import React from "react";
import { Link } from "react-router-dom";
import GeneralDashboard from "../../Pages/GeneralDashboard/GeneralDashboard";
import "./Savings.scss";
export default function Savings() {
  return (
    <GeneralDashboard>
      <div className="savings">
        <h1>Savings</h1>
        <p>Let's see how well you're doing.</p>

        <div className="balance">
          <p>Total Balance</p>
          <h1>#300,750.98</h1>
        </div>

        <div className="savings_container">
          <p>BUILD YOUR SAVINGS</p>
          <div className="savings_action">
           <Link to='/GeneralDashboard/settings/savings/flex'> <div className="flex">
              <h3>Flex</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>#92,000.00</h3>
            </div>
            </Link>
            <Link to='/GeneralDashboard/settings/savings/fixed'><div className="fixed">
              <h3>Fixed</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>#122,400.00</h3>
            </div>
            </Link>
            <div className="auto_save">
              <h3>AutoSave</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>232,230.00</h3>
            </div>
            <div className="targets">
              <h3>Targets</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>345,450.00</h3>
            </div>
            <div className="flex_dollar">
              <h3>Flex Dollar</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>87,900.00</h3>
            </div>
            <div className="flex_pounds">
              <h3>Flex Pounds</h3>
              <p>
                Flexible savings for emergencies. Free transfer, withdrawals etc
                8% p.a
              </p>
              <h3>54,700.00</h3>
            </div>
          </div>
        </div>
      </div>
    </GeneralDashboard>
  );
}
