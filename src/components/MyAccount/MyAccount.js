import React from "react";
import { Link } from "react-router-dom";
import GeneralDashboard from "../../Pages/GeneralDashboard/GeneralDashboard";
import "../MyAccount/MyAccount.scss";

export default function MyAccount({children}) {
  
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
        <Link to= "/GeneralDashboard/my_account/profile_settings"><li> <i class="fa-regular fa-user"></i> Profile Settings</li></Link>
        <Link to= "/dashboard/faq"><li>2FA: Update Security Question</li></Link>

        <Link to= "/dashboard/notification_settings">
        <li><i class="fa-regular fa-bell-slash"></i> Notification Settings</li>
        </Link>
        <Link to= "/dashboard/next-of-kin_settings">
        <li> <i class="fa-solid fa-user-group"></i> Next of kin Settings</li>
        </Link>
        <Link to= "/dashboard/interest_settings">
        <li><i class="fa-solid fa-percent"></i> Interest Settings</li>

        </Link>
        <Link to= "/dashboard/password_settings">
        <li><i class="fa-solid fa-key"></i> Password Settings</li>

        </Link>
        <Link to= "/dashboard/bvn_settings">
        <li><i class="fa-light fa-unlock-keyhole"></i> BVN Settings</li>
            
        </Link>
        <Link to= "/dashboard/update_kyc">
        <li><i class="fa-regular fa-pen-to-square"></i> Update KYC </li>
        </Link>
        </ul>
        </div>
        <div className="right">{children}</div>
        </div>
    </div>
    </GeneralDashboard> 
  );
}
