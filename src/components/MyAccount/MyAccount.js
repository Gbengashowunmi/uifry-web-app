import React from "react";
import { Link } from "react-router-dom";
import "../MyAccount/MyAccount.scss";

export default function MyAccount() {
  // const [active, setActive] = useState(1);
  // const [profile, setProfile] = useState(true);
  // const [security, setSecurity] = useState(false);
  // const [notification, setNotification] = useState(false);
  // const [kin, setKin] = useState(false);
  // const [interest, setInterest] = useState(false);
  // const [password, setPassword] = useState(false);
  // const [bvn, setBvn] = useState(false);
  // const [kyc, setKyc] = useState(false);

  return (
    <div className="my_account">
      <div className="user">
        <h3>My Account</h3>
        <p>Gbenga Showunmi</p>
      </div>
      {/* <ul>
        <li>Profile Settings</li>
        <li>2FA: Update Security Question</li>
        <li>Notification Settings</li>
        <li>Next of kin Settings</li>
        <li>Interest Settings</li>
        <li>Password Settings</li>
        <li>BVN Settings</li>
        <li>Update KYC </li>
      </ul> */}
      <ul>
        <Link to= "/dashboard/profile_settings"><li> <i class="fa-regular fa-user"></i> Profile Settings</li></Link>
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
  );
}
