import React from 'react'
import '../AboutPage/AboutStyles/AboutStyle.css'
import AboutSection1 from './AboutSection1'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import AboutSection4 from './AboutSection4'
import AboutSection5 from './AboutSection5'
import AboutSection6 from './AboutSection6'
import AboutSection7 from './AboutSection7'
import PaymentIndex from '../../Components/PaymentComponent/PaymentIndex'

const AboutIndex = () => {
  return (
    <div>
        <AboutSection1/>
        <AboutSection2/>
        <AboutSection3/>
        <PaymentIndex/>
        <AboutSection4/>
        <AboutSection5/>
        <AboutSection6/>
        <AboutSection7/>
    </div>
  )
}

export default AboutIndex