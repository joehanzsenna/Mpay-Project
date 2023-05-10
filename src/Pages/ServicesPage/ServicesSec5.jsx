import React from 'react'
import servicesSec5Mastercard from '../../Assets/ServicesPageAssets/ServicesSec5Mastercard.png'
import servicesSec5Visa from '../../Assets/ServicesPageAssets/ServicesSec5Vise.png'
import servicesSec5Stripe from '../../Assets/ServicesPageAssets/ServicesSec5Stripe.png'
import servicesSec5Paypal from '../../Assets/ServicesPageAssets/ServicesSec5Paypal.png'

import servicesSec5Image from '../../Assets/ServicesPageAssets/ServicesSec5Image.png'
import servicesSec5Laptop from '../../Assets/ServicesPageAssets/ServicesSec5laptop.png'
import servicesSec5Hotspot from '../../Assets/ServicesPageAssets/ServicesSec5hotspot.png'
import servicesSec5Watch from '../../Assets/ServicesPageAssets/ServicesSec5watch.png'
import servicesSec5Diamonds from '../../Assets/ServicesPageAssets/ServicesSec5diamond.png'
import servicesSec5Bars from '../../Assets/ServicesPageAssets/ServicesSec5Bars.png'


const ServicesSec5 = () => {
  return (
    <div className='ServicesSec5'>
        <div className='ServicesSec5-contents'>
            <div className='ServicesSec5-contents--1'>
                <h1>Hot Promo, Discount, and Cashback</h1>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in quis tellus ultrices enim ut porttitor. Sed consectetur tellus velit luctus. E</p>
                <p>
                Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in 
                </p>
                <div>
                    <img src={servicesSec5Mastercard} alt="" />
                    <img src={servicesSec5Visa} alt="" />
                    <img src={servicesSec5Stripe} alt="" />
                    <img src={servicesSec5Paypal} alt="" />
                </div>
            </div>
            <div className='ServicesSec5-contents--2'>
                <img src={servicesSec5Image} alt="" />
                <div>
                    <img src={servicesSec5Laptop} alt="" />
                    <img src={servicesSec5Hotspot} alt="" />
                    <img src={servicesSec5Watch} alt="" />
                    <img src={servicesSec5Diamonds} alt="" />
                    <img src={servicesSec5Bars} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSec5