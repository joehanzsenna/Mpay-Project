import React from 'react'
import imgEllipse from '../../Assets/HomePageAssets/Ellipse 12.png'
import imgCard from '../../Assets/HomePageAssets/CARD.png'
import imgIphone from '../../Assets/HomePageAssets/iPhone 12 Pro 6.png'


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
                <h1>Manage Everything in Your  Hand</h1>
                <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                <div>
                    <div>
                        <i>icon</i>
                        <div>
                            <h3>User Friendly</h3>
                            <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                    <div>
                        <i>icon</i>
                        <div>
                            <h3>Best Support</h3>
                            <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                    <div>
                        <i>Secure</i>
                        <div>
                            <h3>User Friendly</h3>
                            <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2