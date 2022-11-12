import React from "react";
import { Link } from "react-router-dom";
import '../GeneralDashboard/GeneralDashboard.scss'

export default function GeneralDashboard({children}) {
  return (
    <div className="general_dashboard">
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
            <Link to="/GeneralDashboard/settings/todays_rate"><li><i className="fa-solid fa-gear"></i> Settings</li></Link>
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
      <div className="dashboard">{children}</div>
    </div>
  );
}
