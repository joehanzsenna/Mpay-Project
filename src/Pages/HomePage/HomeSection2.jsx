import React from 'react'
import imgEllipse from '../../Assets/HomePageAssets/Ellipse 12.png'
import imgCard from '../../Assets/HomePageAssets/CARD.png'
import imgIphone from '../../Assets/HomePageAssets/iPhone 12 Pro 6.png'
import ImgUser from '../../Assets/HomePageAssets/Homesec2userFriendly.png'
import ImgSupport from '../../Assets/HomePageAssets/Homesec2Support.png'
import ImgPrivate from '../../Assets/HomePageAssets/Homesec2private.png'


const HomeSection2 = () => {
  return (
    <div className='HomeSection2'>
        <div className='HomeSection2-contents'>
            <div className='HomeSection2-contents__1'>
                <img src={imgEllipse} alt="" id='ellipse'/>
                <img src={imgCard} alt="" id='card'/>
                <img src={imgIphone} alt="" id='iphone'/>
            </div>
            <div className='HomeSection2-contents__2'>
                <h1 className='header--2 m-bottom1'>Manage Everything in Your  Hand</h1>
                <p className='text--1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <div className='HomeSection2-inner'>
                    <div className='HomeSection2-innerContent'>
                        <img src={ImgUser} alt="" className='HomeSec2icons'/>
                        <div>
                            <h3 className='header--3'>User Friendly</h3>
                            <p className='text--1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                    <div className='HomeSection2-innerContent'>
                        <img src={ImgSupport} alt="" className='HomeSec2icons'/>
                        <div>
                            <h3 className='header--3'>Best Support</h3>
                            <p className='text--1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                    <div className='HomeSection2-innerContent'>
                        <img src={ImgPrivate} alt="" className='HomeSec2icons'/>
                        <div>
                            <h3 className='header--3'>User Friendly</h3>
                            <p className='text--1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2