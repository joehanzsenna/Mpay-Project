import React from 'react'
import servicesSec8Ellipse from '../../Assets/ServicesPageAssets/servicesSec8Ellipse.png'
import servicesSec8Card from '../../Assets/ServicesPageAssets/servicesSec8Card.png'
import servicesSec8Mastercard from '../../Assets/ServicesPageAssets/servicesSec8Mastercard.png'
import servicesSec8Visa from '../../Assets/ServicesPageAssets/servicesSec8Visa.png'


const ServicesSec8 = () => {
  return (
    <div className='ServicesSec8'>
        <div className='ServicesSec8-contents'>
            <div className='ServicesSec8-contents--1'>
                <img src={servicesSec8Ellipse} alt="" />
                <img src={servicesSec8Card} alt="" />
            </div>
            <div className='ServicesSec8-contents--2'>
                <h1>MPAY Card</h1>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in quis tellus ultrices enim ut porttitor. Sed consectetur tellus velit luctus. E</p>
                <div>
                    <img src={servicesSec8Mastercard} alt="" />
                    <img src={servicesSec8Visa} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSec8