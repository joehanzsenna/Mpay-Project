import React from 'react'
import MpayLogo from '../../Assets/HomePageAssets/MPAY LOGO.svg'

const FooterSec2 = () => {
  return (
    <div className='FooterSec2'>
        <div className='FooterSec2-contents'>
            <div className='FooterSec2-contents__item'>
                <img src={MpayLogo} alt="" />
                <p>0ne Application for Every Transaction</p>
                <div>
                    <i>Icon</i>
                    <i>Icon</i>
                    <i>Icon</i>
                </div>
            </div>
            <div className='FooterSec2-contents__item'>
                <h5>Other Pages</h5>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Services</li>
            </div>
            <div className='FooterSec2-contents__item'> 
                <h5>Quick Links</h5>
                <li>Disclaimer</li>
                <li>Security</li>
                <li>FAQ</li>
            </div>
            <div className='FooterSec2-contents__item'>
                <h5>Social Media</h5>
                <li>Our Support and Sales team are always available 24/7 to answer your queries</li>
                <div>
                    <i>Icon</i>
                    <i>Icon</i>
                    <i>Icon</i>
                    <i>Icon</i>
                </div>
            </div>
        </div>
        <div className='FooterSec2-contents--2'>
            <h5>MPay by Mickietyronne</h5>
            <h5>Copyright,    2023, All rights reserved</h5>
        </div>
    </div>
  )
}

export default FooterSec2