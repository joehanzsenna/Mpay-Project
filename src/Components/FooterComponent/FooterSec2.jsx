import React from 'react'
import MpayLogo from '../../Assets/HomePageAssets/MPAY LOGO.svg'
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { IoIosAppstore } from 'react-icons/io';

import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { FcBookmark} from 'react-icons/fc';
import { IconContext } from "react-icons";


const FooterSec2 = () => {
    
  return (
    <div className='FooterSec2'>
        <div className='FooterSec2-contents'>
            <div className='FooterSec2-contents__item firstItem'>
                <img src={MpayLogo} alt="" />
                <h5>One Application for Every Transaction</h5>
                <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>

                    <div className='footerSec2-icons'>
                        <i><AiFillApple className='footerSec2-icon'/></i>
                        <FaGooglePlay className='footerSec2-icon'/>
                        <IoIosAppstore className='footerSec2-icon'/>
                    </div>
                </IconContext.Provider>
            </div>
            <div className='FooterSec2-contents__item'>
                <h5 className='FooterSec2--header1'>Other Pages</h5>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Services</li>
            </div>
            <div className='FooterSec2-contents__item'> 
                <h5 className='FooterSec2--header1'>Quick Links</h5>
                <li>Disclaimer</li>
                <li>Security</li>
                <li>FAQ</li>
            </div>
            <div className='FooterSec2-contents__item'>
                <h5 className='FooterSec2--header1'>Social Media</h5>
                <li>Our Support and Sales team are always available 24/7 to answer your queries</li>
                <div className='footerSec2-icons'>
                    <BsTwitter className='footerSec2-icon' />
                    <FaFacebookF className='footerSec2-icon'/>
                    <ImLinkedin2 className='footerSec2-icon'/>
                    <FcBookmark className='footerSec2-icon'/>
                </div>
            </div>
        </div>
        <div className='FooterSec2-contents--2'>
            <h6>MPay by Mickietyronne</h6>
            <h6>Copyright,    2023, All rights reserved</h6>
        </div>
    </div>
  )
}

export default FooterSec2