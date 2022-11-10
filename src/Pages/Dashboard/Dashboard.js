import React from "react";
import { Link } from "react-router-dom";
import MyAccount from "../../components/MyAccount/MyAccount";
import '../Dashboard/dashboard.scss'

export default function Dashboard({children}) {
  return (
    <div className="dashboard">
      <div className="left_bar">
        <Link to='/'>
        <div className="logo"><img src='/images/uifry_logo.png' alt='logo'/> <h4><strong>Uifry</strong></h4></div>
        </Link>
        <div className="nav">
        <p>MANAGE</p>

          <ul>
            <li><i class="fa-solid fa-gauge-simple-high"></i> Dashboard</li>
            <li><i className="fa-solid fa-chart-pie"></i> Analytics</li>
            <li><i class="fa-solid fa-heart-pulse"></i> Performance</li>
            <li><i className="fa-solid fa-gear"></i> Settings</li>
            <li className="red"> <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
          </ul>
        </div>
        <div className="nav">
          <p>PREFERENCE</p>
          <ul>
            <li><i class="fa-solid fa-circle-half-stroke"></i> Theme</li>
            <li><i class="fa-solid fa-shield-halved"></i> Security</li>
          </ul>
        </div>
      </div>
      <MyAccount />
      <div className="right_bar">{children}</div>
    </div>
  );
}
