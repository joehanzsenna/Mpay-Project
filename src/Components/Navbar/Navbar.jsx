import React from 'react'
import './NavbarStyle.css'
import {Link} from 'react-router-dom'
import MpayLogo from '../../Assets/HomePageAssets/MPAY LOGO.svg'

const Navbar = () => {
  return (
    <div className='navBarContainer'>
        <div className='navBarContents'>
            <img src={MpayLogo} alt="" className='mpayLogo'/>
            <ul className='menuList'>
                <Link to='/' className='linkStyle'>
                  <li>Home</li>
                </Link>
                <Link to='/about' className='linkStyle'>
                  <li>About Us</li>
                </Link>
                <Link to='/services' className='linkStyle'>
                  <li>Services</li>
                </Link>
                <Link to='/contact' className='linkStyle'>
                  <li>Contact Us</li>
                </Link>
                <Link to='/services'>
                  <button className='btn--1'>Learn More</button>
                </Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar