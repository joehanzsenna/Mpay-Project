import React from 'react'
import imgSec3 from '../../Assets/HomePageAssets/imgSec3.png'
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
                <h2>Enjoy Enormous Business Promos</h2>
                <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <button>GETSTARTED</button>
            </div>
            <div className='HomeSection3-contents--2'>
                <img src={imgSec3} alt="" />
                <img src={imgSec3Laptop} alt="" />
                <img src={imgSec3Hotspot} alt="" />
                <img src={imgSec3Watch} alt="" />
                <img src={imgSec3Diamond} alt="" />
                <img src={imgSec3Bar} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomeSection3