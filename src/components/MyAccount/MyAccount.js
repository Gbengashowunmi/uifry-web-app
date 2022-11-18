import React from "react";
import { NavLink } from "react-router-dom";
import GeneralDashboard from "../../Pages/GeneralDashboard/GeneralDashboard";
import "../MyAccount/MyAccount.scss";

export default function MyAccount({ children }) {
  return (
    <GeneralDashboard>
      <div className="my_account">
        <div className="user">
          <h3>My Account</h3>
          <p>Gbenga Showunmi</p>
        </div>
        <div className="my_account_container">
          <div className="left">
            <ul>
              <NavLink to="/GeneralDashboard/my_account/profile_settings">
                {({ isActive }) => (
                  <li className={isActive ? "active" : ''}>
                    <i class="fa-regular fa-user"></i> Profile Settings
                  </li>
                )}
              </NavLink>
              <NavLink to="/dashboard/faq">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>2FA: Update Security Question</li>)}
              </NavLink>

              <NavLink to="/dashboard/notification_settings">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  <i class="fa-regular fa-bell-slash"></i> Notification Settings
                </li>)}
              </NavLink>
              <NavLink to="/dashboard/next-of-kin_settings">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  {" "}
                  <i class="fa-solid fa-user-group"></i> Next of kin Settings
                </li>)}
              </NavLink>
              <NavLink to="/dashboard/interest_settings">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  <i class="fa-solid fa-percent"></i> Interest Settings
                </li>)}
              </NavLink>
              <NavLink to="/dashboard/password_settings">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  <i class="fa-solid fa-key"></i> Password Settings
                </li>)}
              </NavLink>
              <NavLink to="/dashboard/bvn_settings">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  <i class="fa-light fa-unlock-keyhole"></i> BVN Settings
                </li>)}
              </NavLink>
              <NavLink to="/dashboard/update_kyc">{({ isActive }) => (
                <li className={isActive ? "active" : ''}>
                  <i class="fa-regular fa-pen-to-square"></i> Update KYC{" "}
                </li>)}
              </NavLink>
            </ul>
          </div>
          <div className="right">{children}</div>
        </div>
      </div>
    </GeneralDashboard>
  );
}
