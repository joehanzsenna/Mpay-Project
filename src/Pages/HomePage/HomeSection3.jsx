import React from 'react'
import HomeSec3Img from '../../Assets/HomePageAssets/imgSec3.png'
import imgSec3Laptop from '../../Assets/HomePageAssets/laptop.png'
import imgSec3Hotspot from '../../Assets/HomePageAssets/hotspot.png'
import imgSec3Watch from '../../Assets/HomePageAssets/watch.png'
import imgSec3Diamond from '../../Assets/HomePageAssets/diamond.png'
import imgSec3Bar from '../../Assets/HomePageAssets/bar-Group.png'

const HomeSection3 = () => {
  return (
    <div className='HomeSection3'>
        <div className='HomeSection3-contents'>
            <div className='HomeSection3-contents--1'>
                <h2 className='header--2 m-bottom1'>Enjoy Enormous Business Promos</h2>
                <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <button className='btn--2'>GETSTARTED</button>
            </div>
            <div className='HomeSection3-contents--2'>
                <img src={HomeSec3Img} alt="" id='HomeSec3Img'/>
                <img src={imgSec3Laptop} alt="" id='HomeSec3Laptop'/>
                <img src={imgSec3Hotspot} alt="" id='HomeSec3Hotspot'/>
                <img src={imgSec3Watch} alt="" id='HomeSec3Watch'/>
                <img src={imgSec3Diamond} alt="" id='HomeSec3Diamond'/>
                <img src={imgSec3Bar} alt="" id='HomeSec3Bar'/>
            </div>
        </div>
    </div>
  )
}

export default HomeSection3