import React from 'react'
import imgMastercard from '../../Assets/HomePageAssets/mastercardLogo.png'
import imgVisa from '../../Assets/HomePageAssets/visaLogo.png'
import imgStripe from '../../Assets/HomePageAssets/stripeLogo.png'
import imgPaypal from '../../Assets/HomePageAssets/paypalLogo.png'

const HomeSection6 = () => {
  return (
    <div>
        <div>
            <div>
                <h1>Support Payment From Every Platform</h1>
                <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <h5>Supported Payment</h5>
                <div>
                    <img src={imgMastercard} alt="" />
                    <img src={imgVisa} alt="" />
                    <img src={imgStripe} alt="" />
                    <img src={imgPaypal} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection6