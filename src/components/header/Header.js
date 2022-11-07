import React from 'react'
import Button from '@mui/material/Button';
import './Header.scss'
import { Link } from "react-router-dom";




export default function Header() {
  return (
    <div className='header'>
        <h1 className='title'>Uifry</h1>
        <ul>
            <li>Personal</li>
            <li>Business</li>
            <li>Company</li>
            <li>Help</li>
        </ul>
        <div className='sign_in_get_app'>
           <Link to="/login"> <h3 className='sign_in'>Sign in</h3> </Link>
            <Button className='button'>Get Uifry</Button>
        </div>
    </div>
  )
}
