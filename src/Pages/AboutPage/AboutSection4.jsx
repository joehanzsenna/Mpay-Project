import React from 'react'
import aboutSec4Ellipse from '../../Assets/AboutPageAssets/AboutSection4Ellipse.png'
import aboutSec4Card from '../../Assets/AboutPageAssets/AboutSection4Card.png'
import aboutSec4Iphone from '../../Assets/AboutPageAssets/AboutSection4Iphone.png'
import aboutSec4Img from '../../Assets/AboutPageAssets/AboutSec4Img.png'


const AboutSection4 = () => {
  return (
    <div className='AboutSection4'>
        <div className='AboutSection4-contents'>
            <div className='AboutSection4-contents--1'>
                <img src={aboutSec4Ellipse} alt="" />
                <img src={aboutSec4Card} alt="" />
                <img src={aboutSec4Iphone} alt="" />
                <img src={aboutSec4Img} alt="" />
            </div>
            <div className='AboutSection4-contents--2'>
                <h1>Committed to Give You the Best Service</h1>
                <p>Purus sit imperdiet egestas penatibus. Duis odio metus tristique orci rutrum ipsum mattis. Auctor vel commodo consectetur placerat semper vel. Nunc volutpat eget facilisis dui tellus. Elementum ornare non sollicitudin hendrerit nunc mi proin nibh. Adipiscing at mi ultrices et sagittis nibh libero. Pha</p>
                <div>
                    <div>
                        <h1>100 <span>+</span></h1>
                        <p>Active user</p>
                    </div>
                    <div>
                        <h1>400 <span>+</span></h1>
                        <p>App Download</p>
                    </div>
                    <div>
                        <h1>100 <span>+</span></h1>
                        <p>Satisfied users</p>
                    </div>
                    <div>
                        <h1>200 <span>+</span></h1>
                        <p>Partner Joined</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection4