import React from 'react'
import './customCard.scss'
export default function CustomCardDetails() {
  return (
    <div className='card_details'>
        <div className='card_content'>
           <strong><p>1234 5678 90xx xxxx</p></strong>
           <strong><span className='span'><p>12/22</p> <p>xxx</p></span></strong>
        </div>
    </div>
  )
}
