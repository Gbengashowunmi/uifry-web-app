import React from "react";
import MyAccount from "../../components/MyAccount/MyAccount";
import '../Dashboard/dashboard.scss'

export default function Dashboard({children}) {
  return (
    <div className="dashboard">
      <div className="left_bar">Left Bar</div>
      <MyAccount />
      <div className="right_bar">{children}</div>
    </div>
  );
}
