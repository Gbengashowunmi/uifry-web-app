import React, { useState } from 'react'
import './Navbar.scss'
export default function Navbar() {

const [active, setActive] = useState(false)

    const handleClick =()=>{
        setActive((prev)=> !prev)
    }
  return (
    <div onClick={handleClick} className='nav_bar' >
        <i className={active?'fa-solid fa-2xl fa-xmark menu': 'fa-solid fa-2xl fa-bars menu'}></i>
        <div className={active?'overlay':'hide'}></div>
    </div>

  )
}
