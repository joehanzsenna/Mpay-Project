import React from 'react'
import HomeSection1 from './HomeSection1'
import '../HomePage/HomeStyles/HomeStyle.css'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeSection4 from './HomeSection4'
import HomeSection5 from './HomeSection5'
import HomeSection6 from './HomeSection6'
import PaymentIndex from '../../Components/PaymentComponent/PaymentIndex'

const HomeIndex = () => {
  return (
    <div>
        <HomeSection1/>
        <PaymentIndex/>
        <HomeSection2/>
        <HomeSection3/>
        <HomeSection4/>
        <HomeSection5/>
        <HomeSection6/>
    </div>
  )
}

export default HomeIndex