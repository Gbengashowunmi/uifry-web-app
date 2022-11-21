import { Button } from '@mui/material';
import React from 'react'
import AnimatedPage from '../../AnimatedPage';
import '../InterestSettings/interest.scss'
import MyAccount from '../MyAccount';

export default function InterestSettings() {
  return (
    <MyAccount>
      <AnimatedPage>
        <div className='interest_settings'>
        <h4 className='heading'>Interest Settings</h4>
        <p>You can enable or disable interest on your Uifry.</p>
        <div className='enable_disable'>
          <i class="fa-solid fa-toggle-on fa-3x toggle"></i>
          <p>Disable Referral Notification</p>
        </div>
        <div className='enable_disable'>
          <i class="fa-solid fa-toggle-on fa-3x toggle"></i>
          <p>Disable Interest on Savings</p>
        </div>
        <Button className="button">UPDATE SETTINGS</Button>
      </div>
      </AnimatedPage>
    </MyAccount>
  )
}
