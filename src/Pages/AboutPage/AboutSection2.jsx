import React from 'react'
import imgSec201 from '../../Assets/AboutPageAssets/user friendly log.png'
import imgSec202 from '../../Assets/AboutPageAssets/support log.png'
import imgSec203 from '../../Assets/AboutPageAssets/private logo.png'
import imgSec2Boy from '../../Assets/AboutPageAssets/AboutPicSec2.png'
import imgSec2Spiral from '../../Assets/AboutPageAssets/Spiral AboutSec2.svg'


const AboutSection2 = () => {
  return (
    <div className='AboutSection2'>
        <div className='AboutSection2-contents'>
            <div className='AboutSection2-contents--1'> 
                <div>
                    <h1>Crafted by the Creative Genzies</h1>
                    <p>Purus sit imperdiet egestas penatibus. Duis odio metus tristique orci rutrum ipsum mattis. Auctor vel commodo consectetur placerat semper vel. Nunc volutpat eget facilisis dui tellus. Elementum ornare non sollicitudin hendrerit nunc mi proin nibh. Adipiscing at mi ultrices et sagittis nibh libero. Pha</p>

                </div>

                <div>
                    <div>
                        <img src={imgSec201} alt="" />
                        <div>
                            <h5>User Friendly</h5>
                            <p>Augue nulla turpis consectetur pharetra fames.  rhoncus lectus Augue nulla turpis consectetur pharetra </p>
                        </div>
                    </div>
                    <div>
                    <img src={imgSec202} alt="" />
                        <div>
                            <h5> Best Support</h5>
                            <p>Augue nulla turpis consectetur pharetra fames.  rhoncus lectus Augue nulla turpis consectetur pharetra </p>
                        </div>
                    </div>
                    <div>
                    <img src={imgSec203} alt="" />
                        <div>
                            <h5>Security</h5>
                            <p>Augue nulla turpis consectetur pharetra fames.  rhoncus lectus Augue nulla turpis consectetur pharetra </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AboutSection2-contents--2'>
                <div>
                    <img src={imgSec2Boy} alt="" />
                    <img src={imgSec2Spiral} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection2