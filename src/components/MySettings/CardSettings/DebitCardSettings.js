import React from 'react'
import MySettings from '../MySettings';
import './DebitCard.scss'
export default function DebitCardSettings() {
  return (
    <MySettings>
    <h4 className='heading'>My Debit Cards</h4>

    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
    <div className='card_details'>
        <div className='card_content'>
           <strong><p>1234 5678 90xx xxxx</p></strong>
           <strong><span className='span'><p>12/22</p> <p>xxx</p></span></strong>
        </div>
    </div>
    <div className='card_details'>
        <div className='card_content'>
           <strong><p>1234 5678 90xx xxxx</p></strong>
           <strong><span className='span'><p>12/22</p> <p>xxx</p></span></strong>
        </div>
    </div>
    </MySettings>
  )
}
