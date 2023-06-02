import React from 'react'
import '../ServicesPage/ServicesStyles/ServicesStyle.css'
import ServicesSec1 from './ServicesSec1'
import ServicesSec2 from './ServicesSec2'
import ServicesSec3 from './ServicesSec3'
import ServicesSec4 from './ServicesSec4'
import ServicesSec5 from './ServicesSec5'
import ServicesSec6 from './ServicesSec6'
import ServicesSec7 from './ServicesSec7'
import ServicesSec8 from './ServicesSec8'
import PaymentIndex from '../../Components/PaymentComponent/PaymentIndex'

const ServicesIndex = () => {
  return (
    <div>
        <ServicesSec1/>
        <ServicesSec2/>
        <ServicesSec3/>
        <PaymentIndex/>
        <ServicesSec4/>
        <ServicesSec5/>
        <ServicesSec6/>
        <ServicesSec7/>
        <ServicesSec8/>
    </div>
  )
}

export default ServicesIndex