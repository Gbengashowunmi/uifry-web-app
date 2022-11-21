import { Link } from 'react-router-dom';
import React from 'react'
import GeneralDashboard from '../../../Pages/GeneralDashboard/GeneralDashboard';
import './AutoSave.scss'
export default function AutoSave() {
  return (
    <GeneralDashboard>
    <div className='flex'>
      <h3 className='font_color lp'>Auto Save</h3>

      <ul>
      <Link to="/GeneralDashboard/settings/savings/flex"><li> <img src="/images/flex_icon.png" alt="flex" />Flex</li></Link>
        <Link to="/GeneralDashboard/settings/savings/fixed"> <li> <img src="/images/flex_icon.png" alt="fixed" />Fixed</li></Link>
        <Link to="/GeneralDashboard/settings/savings/autoSave"><li className='font_color'><img src="/images/flex_icon.png" alt="flex" />AutoSave</li></Link>
        <Link to="/GeneralDashboard/settings/savings/target"><li><img src="/images/flex_icon.png" alt="flex" /> Target</li></Link>
        <Link to="/GeneralDashboard/settings/savings/flex_dollars"><li><img src="/images/flex_icon.png" alt="flex" />Flex Dollars</li></Link>
        <Link to="/GeneralDashboard/settings/savings/flex_pounds"> <li><img src="/images/flex_icon.png" alt="flex" />Flex Pounds</li></Link>
      </ul>

      <main>
        <div className='left'>
<div className='top auto_save_border'>
  <div className='up auto_save_border'>
<p>FLEX ACCOUNT (8%)</p>
<h3 className='font_color'>₦16.88</h3>
<p>Available Balance:<strong className='font_color'>₦16.88</strong></p>
</div>

<div className='mid auto_save_border'>
  <p>New Label</p>
  <hr className='auto_save_border'/>
  <p>Withdrawal</p>
</div>

<div className='down'>
  <div className='down_left auto_save_border'>
 <p>Interest in 8days</p>
 <p><strong>₦0.03</strong> at (8% p.a)</p>
  </div>
  <div className='down_right auto_save_border'>
 <p>withdrawals</p>
 <p><strong>0</strong>this month</p>
  </div>
</div>
</div>

<div className='bottom auto_save_border'>
  <div className='heading_btns'>
<p><strong>TRANSACTIONS</strong></p>
<div className='btns'>
<button> All</button>
<button> Credit</button>
<button> Debit</button>
</div>
</div>
<div className='transaction_details'>
  <div className='transaction_container'>
  <img src='/images/red.png' alt='red' />
  <div className='transaction_action'>
    <p><strong>Withdrawal Made</strong></p>
    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
  </div>
  </div>
  <p className='amount'>₦900.32</p>
</div>
<div className='transaction_details'>
<div className='transaction_container'>
<img src='/images/green.png' alt='green' />

  <div className='transaction_action'>
    <p><strong>Transfer From Gbenga Showunmi</strong></p>
    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
  </div>
  </div>

  <p className='amount'>₦900.32</p>
</div>
<div className='transaction_details'>
  <div className='transaction_container'>
<img src='/images/red.png' alt='red' />

  <div className='transaction_action'>
    <p><strong>Withdrawal Made</strong></p>
    <p>Sat, 27 Nov 2021 07:06:00 GMT</p>
  </div>
  </div>

  <p className='amount'>₦900.32</p>
</div>

<button className='view_more font_color'> VIEW MORE TRANSACTIONS</button>
</div>
        </div>
        <div className='right auto_save_border'>
          <p>ACCOUNT NUMBER</p>
          <h4>7820868560</h4>
          <p>WEMA BANK</p>
          <hr/>
          <p><img src="/images/copy.png" alt="copy" /> Copy</p>
        </div>
      </main>
    </div>
    </GeneralDashboard>
  )
}
