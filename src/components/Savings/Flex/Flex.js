import React from 'react'
import GeneralDashboard from '../../../Pages/GeneralDashboard/GeneralDashboard';
import './Flex.scss'
export default function Flex() {
  return (
    <GeneralDashboard>
    <div className='flex'>
      <h3>Flex</h3>

      <ul>
        <li> <img src="/images/flex_icon.png" alt="flex" />Flex</li>
        <li><img src="/images/flex_icon.png" alt="flex" />AutoSave</li>
        <li><img src="/images/flex_icon.png" alt="flex" />Flex Target</li>
        <li><img src="/images/flex_icon.png" alt="flex" />Flex Dollars</li>
        <li><img src="/images/flex_icon.png" alt="flex" />Flex Pounds</li>
      </ul>

      <main>
        <div className='left'>
<div className='top'>
  <div className='up'>
<p>FLEX ACCOUNT (8%)</p>
<h3>₦16.88</h3>
<p>Available Balance:<strong>₦16.88</strong></p>
</div>

<div className='mid'>
  <p>New Label</p>
  <hr/>
  <p>Withdrawal</p>
</div>

<div className='down'>
  <div className='down_left'>
 <p>Interest in 8days</p>
 <p><strong>₦0.03</strong> at (8% p.a)</p>
  </div>
  <div className='down_right'>
 <p>withdrawals</p>
 <p><strong>0</strong>this month</p>
  </div>
</div>
</div>

<div className='bottom'>
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

<button className='view_more'> VIEW MORE TRANSACTIONS</button>
</div>
        </div>
        <div className='right'>
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
