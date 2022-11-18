import React from 'react'
import './balanceComponent.scss'

export default function BalanceComponent({title,amount}) {
  return (
    <div className='container'>
      
        <p>{title}</p>
        <h2>#{amount}</h2>
    </div>
  )
}
