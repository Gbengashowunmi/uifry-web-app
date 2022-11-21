import React from "react";
import { NavLink } from "react-router-dom";
import GeneralDashboard from "../../Pages/GeneralDashboard/GeneralDashboard";
import "../MyAccount/MyAccount.scss";

export default function MySettings({ children }) {
  return (
    <GeneralDashboard>
      <div className="my_account">
        <div className="user">
          <h3>My Settings</h3>
          <p>Gbenga Showunmi</p>
        </div>
        <div className="my_account_container">
          <div className="left">
            <ul>
              <NavLink to="/GeneralDashboard/settings/todays_rate">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-regular fa-user"></i> Today's Rate
                  </li>
                )} 
              </NavLink>
              <NavLink to="/dashboard/selfhelp">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>Self Help</li>
                )}
              </NavLink>

              <NavLink to="/dashboard/refer">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-regular fa-bell-slash"></i> Refer & Earn
                    #1,000.00
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/withdraw_funds">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-solid fa-user-group"></i> Withdraw funds
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/card_settings">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-solid fa-percent"></i> My Card & bank Settings
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/library_settings">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-solid fa-key"></i> View Uifry Library
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/contact">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ""}>
                    <i class="fa-light fa-unlock-keyhole"></i> Contact Us
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/update_kyc">
                <li className="red">
                  <i class="fa-regular fa-pen-to-square"></i> Log Out{" "}
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="right">{children}</div>
        </div>
      </div>
    </GeneralDashboard>
  );
}
