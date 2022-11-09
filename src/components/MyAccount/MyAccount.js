import React from 'react'
import { Link } from 'react-router-dom';
import '../MyAccount/MyAccount.scss'

export default function MyAccount() {
  return (
    <div className='my_account'>
      <div className='user'>

      <h3>My Account</h3>
      <p>Gbenga Showunmi</p>
      </div>
        <ul>
        <Link to= "/dashboard/profile_settings"><li>Profile Settings</li></Link>
        <Link to= "/dashboard/faq"><li>2FA: Update Security Question</li></Link>

        <Link to= "/dashboard/notification_settings">
        <li>Notification Settings</li>
        </Link>
        <Link to= "/dashboard/next-of-kin_settings">
        <li>Next of kin Settings</li>
        </Link>
        <Link to= "/dashboard/interest_settings">
        <li>Interest Settings</li>

        </Link>
        <Link to= "/dashboard/password_settings">
        <li>Password Settings</li>

        </Link>
        <Link to= "/dashboard/bvn_settings">
        <li>BVN Settings</li>
            
        </Link>
        <Link to= "/dashboard/update_kyc">
        <li>Update KYC </li>
            
        </Link>
        </ul>
    </div>
  )
}
