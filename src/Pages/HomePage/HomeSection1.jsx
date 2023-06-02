import React from 'react'
import imgSpiral from '../../Assets/HomePageAssets/Spiral 2.png'
import imgRectangle from '../../Assets/HomePageAssets/Rectangle 55.png'
import imgPhone from '../../Assets/HomePageAssets/iPhone13Phone.png'

const HomeSection1 = () => {
  return (
    <div className='HomeSection1'>
        <div className='HomeSection1-contents'>
          <div className='HomeSection1-contents--1'>
            <h1 className='header--1'><span className='fastestColor'>FASTEST</span> PAYMENT <br /> METHOD EVER</h1>
            <p className='text--1 m-bottom1'>Massa cursus cum in at tincidunt nisl id nisl. In ac viverra quis massa in pharetra praesent. Nisl in torto bgbdsudhg  hdhjdkj</p>
            <button className='btn--2'>LEARN MORE</button>
          </div>
          <div>
            <div className='HomeSection1-contents--2'>
              <img src={imgSpiral} alt="" id='imgSpiral'/>
              <img src={imgRectangle} alt="" id='imgRectangle'/>
              <img src={imgPhone} alt="" id='imgPhone'/>

            </div>
          </div>
        </div>

        
    </div>
  )
}

export default HomeSection1