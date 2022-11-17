import React from "react";
import "./dashboard.scss";
import GeneralDashboard from "../GeneralDashboard/GeneralDashboard";

export default function Dashboard() {
  return (
    <GeneralDashboard>
      <div className="dashboard">
        <div className="head"></div>
        <div className="dash_main">
          <div className="left">
            <div className="boxes">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="todo_overview">
              <div className="box"></div>
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
