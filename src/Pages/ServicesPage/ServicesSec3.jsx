import React from 'react'
import servicesSec3Image01 from '../../Assets/ServicesPageAssets/ServicesSec3Image01.png'
import servicesSec3Image02 from '../../Assets/ServicesPageAssets/ServicesSec3Image02.png'

const ServicesSec3 = () => {
  return (
    <div className='servicesSec3'>
        <div className='servicesSec3-contents'>
            <div className='servicesSec3-contents--1'>
                <img src={servicesSec3Image01} alt="" />
                <img src={servicesSec3Image02} alt="" />
            </div>
            <div className='servicesSec3-contents--2'>
                <h1>Best Support & Always Ready to Help</h1>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in quis tellus ultrices enim ut porttitor. Sed consectetur tellus velit luctus. Eu odio at faucibus massa ac in lectus cras blandit. Bibendum sapien non quis rhoncus.</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesSec3