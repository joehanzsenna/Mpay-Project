import React from 'react'
import aboutSec5Image from '../../Assets/AboutPageAssets/aboutSec5image.png'
import aboutSec5Paypal from '../../Assets/AboutPageAssets/aboutSec5paypal logo.png'
import aboutSec5Visa from '../../Assets/AboutPageAssets/aboutSec5visa logo.png'
import aboutSec5Mastercard from '../../Assets/AboutPageAssets/aboutSec5Mastercard.png'
import aboutSec5Iphone from '../../Assets/AboutPageAssets/aboutSec5Iphone.png'

const AboutSection5 = () => {
  return (
    <div className='AboutSection5'>
        <div className='AboutSection5-contents'>
            <div className='AboutSection5-contents--1'>
                <h1>Fastest, Easiest and Most Reliable Payment Platform</h1>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in quis tellus ultrices enim ut porttitor. Sed consectetur tellus velit luctus. E</p>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in </p>
            </div>
            <div className='AboutSection5-contents--2'>
                <img src={aboutSec5Image} alt="" />
                <div>
                    <img src={aboutSec5Paypal} alt="" />
                    <img src={aboutSec5Visa} alt="" />
                    <img src={aboutSec5Mastercard} alt="" />
                    <img src={aboutSec5Iphone} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection5