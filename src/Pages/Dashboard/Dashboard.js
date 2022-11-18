import React from "react";
import "./dashboard.scss";
import GeneralDashboard from "../GeneralDashboard/GeneralDashboard";
import BalanceComponent from "../../components/BalanceCard/BalanceComponent";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <GeneralDashboard>
      <div className="dashboard">
        <div className="head">
          <h3>Gbenga,</h3>
          <div className="right_head">
            <div className=" bell">
              <i className="fa-solid fa-bell"></i>
            </div>
          <Link to='/GeneralDashboard/my_account/profile_settings'>
            <div className="user_nav">
              <img src="/images/user_image.jpg" alt="" />
              <span>
                <strong>
                  <p>Gbenga Showunmi</p>
                </strong>
                <p>gbenga@gmail.com</p>
              </span>
            </div>
          </Link>
          </div>
        </div>
        <div className="dash_main">
          <div className="left">
            <div className="boxes">
              <div className="box">
                <BalanceComponent title="Total Balance" amount="200,000.00" />
              </div>
              <div className="box">
                <BalanceComponent title="Total Savings" amount="800,000.00" />
              </div>
              <div className="box">
                <BalanceComponent
                  title="Total Investment Savings"
                  amount="400,000.00"
                />
              </div>
            </div>
            <div className="todo_overview">
              <div className="todo_box">
                <p>Todo List</p>
                <div className="todo">Verify Your email address</div>
                <div className="todo">Add your BVN or NIN now!</div>
                <div className="todo">Tell us more about Yourself</div>
                <div className="todo">Securely add a debit card</div>
                <div className="todo">Set your security question now!</div>
                <div className="todo">Refer a friend, earn #1000 bonus</div>
              </div>
              <div className="box"></div>
            </div>
          </div>

          <div className="activity"></div>
        </div>

        <div className="footer"></div>
        {/* <MyAccount /> */}
        {/* <div className="right_bar">{children}</div> */}
      </div>
    </GeneralDashboard>
  );
}
