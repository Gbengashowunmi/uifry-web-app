import React from "react";
import { Link } from "react-router-dom";
import GeneralDashboard from "../../../Pages/GeneralDashboard/GeneralDashboard";
import TransitionsModal from "../../Modal";
import "./Fixed.scss";
export default function Fixed() {
  const [open, setOpen] = React.useState(false);
  const handleOpenCreate = () => setOpen(true);
  const handleOpenWhat = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <GeneralDashboard>
      <div className="flex">
        <h3 className="blue lp">Fixed</h3>

        <ul>
          <Link to="/GeneralDashboard/settings/savings/flex">
            <li>
              {" "}
              <img src="/images/flex_icon.png" alt="flex" />
              Flex
            </li>
          </Link>
          <Link to="/GeneralDashboard/settings/savings/fixed">
            {" "}
            <li className="blue">
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
            <div className="top border">
              <div className="up">
                <p>FIXED BALANCE</p>
                <h3 className="blue">₦16.88</h3>
                <p>
                  Available Balance:<strong className="blue">₦16.88</strong>
                </p>
              </div>

              <div className="mid border">
                <p onClick={handleOpenCreate} >Create a Safelock</p>
                <hr className="border" />
                <p onClick={handleOpenWhat}>What is Safelock?</p>
              </div>
            </div>

            <div className="bottom border">
              <div className="heading_btns">
                <p>
                  <strong>TRANSACTIONS</strong>
                </p>
                <div className="btns">
                  <button> Ongoing</button>
                  <button> Completed</button>
                </div>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/double_tick.png" alt="red" />
                  <div className="transaction_action">
                    <p>
                      <strong>For School</strong>
                    </p>
                    <p>Title</p>
                  </div>
                </div>
                <div>
                <p>₦900.32</p>
                  <p>Amount</p>
                </div>
                <div>
                  <p className="amount">₦900.32</p>
                  <p>Inteerst Earned</p>
                </div>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/double_tick.png" alt="green" />

                  <div className="transaction_action">
                    <p>
                      <strong>For School</strong>
                    </p>
                    <p>Title</p>
                  </div>
                </div>

                <div>
                <p>₦900.32</p>
                  <p>Amount</p>
                </div>
                <div>
                  <p className="amount">₦900.32</p>
                  <p>Inteerst Earned</p>
                </div>
              </div>
              <div className="transaction_details">
                <div className="transaction_container">
                  <img src="/images/double_tick.png" alt="red" />

                  <div className="transaction_action">
                    <p>
                      <strong>For School</strong>
                    </p>
                    <p>Title</p>
                  </div>
                </div>
                <div>
                <p>₦900.32</p>
                  <p>Amount</p>
                </div>
                <div>
                  <p className="amount">₦900.32</p>
                  <p>Inteerst Earned</p>
                </div>{" "}
              </div>

              <button className="view_more blue">VIEW MORE TRANSACTIONS</button>
            </div>
          </div>
          <div className="right border">
            <p>INTEREST RATE</p>
            <h4>6%-13%</h4>
            <p>Per Annum</p>
          </div>
        </main>
        <TransitionsModal
        
        open={open}
        handleClose={handleClose}
        handleOpenCreate={handleOpenCreate}
        handleOpenWhat={handleOpenWhat}>
          mee
        </TransitionsModal>
      </div>
    </GeneralDashboard>
  );
}
