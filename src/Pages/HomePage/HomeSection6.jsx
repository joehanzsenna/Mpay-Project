import React from 'react'
import imgMastercard from '../../Assets/HomePageAssets/mastercardLogo.png'
import imgVisa from '../../Assets/HomePageAssets/visaLogo.png'
import imgStripe from '../../Assets/HomePageAssets/stripeLogo.png'
import imgPaypal from '../../Assets/HomePageAssets/paypalLogo.png'
import Hsec6Circles from '../../Assets/HomePageAssets/Hsec6Circles.png'

const HomeSection6 = () => {
  return (
    <div className='HomeSection6'>
        <div className='HomeSection6-contents'>
            <div className='HomeSection6-contents-item'>
                <h1 className='header--2 m-bottom1'>Support Payment From Every Platform</h1>
                <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <h5 className='m-bottom1'>Supported Payment</h5>
                <div className='HomeSec6Icons'>
                    <img src={imgMastercard} alt="" className='HomeSec6Icon'/>
                    <img src={imgVisa} alt="" className='HomeSec6Icon'/>
                    <img src={imgStripe} alt="" className='HomeSec6Icon'/>
                    <img src={imgPaypal} alt="" className='HomeSec6Icon'/>
                </div>
            </div>
                <img src={Hsec6Circles} alt="" className='Hsec6Circles' />
        </div>
    </div>
  )
}

export default HomeSection6