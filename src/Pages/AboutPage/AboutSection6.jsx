import React from 'react'
import aboutSec6Image01 from '../../Assets/AboutPageAssets/aboutSec6Image01.png'
import aboutSec6Image02 from '../../Assets/AboutPageAssets/aboutSec6Image02.png'
import aboutSec6Image03 from '../../Assets/AboutPageAssets/aboutSec6Image03.png'
import aboutSec6Image04 from '../../Assets/AboutPageAssets/aboutSec6Image04.png'
import aboutSec6Image05 from '../../Assets/AboutPageAssets/aboutSec6Image05.png'

const AboutSection6 = () => {
  return (
    <div className='AboutSection6'>
        <div className='AboutSection6-contents'>
            <div className='AboutSection6-contents--1'> 
                <h1>Our Team</h1>
                <p>Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis blandit in quis tellus ultrices enim ut porttitor. Sed consectetur tellus velit luctus. E</p>
            </div>
            <div className='AboutSection6-contents--2'>
                <div className='AboutSection6-contents--2_item'>
                    <img src={aboutSec6Image01} alt="" />
                    <h5>Tyronne Michael</h5>
                    <h6>CEO/Founder</h6>
                    <div>
                        <i>Itwitter</i>
                        <i>Ifacebook</i>
                        <i>Ilinkedin</i>
                        <i>Iinstagram</i>
                    </div>
                </div>
                <div className='AboutSection6-contents--2_item'>
                    <img src={aboutSec6Image02} alt="" />
                    <h5>Akpeki Tega</h5>
                    <h6>Operation Manager</h6>
                    <div>
                        <i>Itwitter</i>
                        <i>Ifacebook</i>
                        <i>Ilinkedin</i>
                        <i>Iinstagram</i>
                    </div>
                </div>
                <div className='AboutSection6-contents--2_item'>
                    <img src={aboutSec6Image03} alt="" />
                    <h5>Alisha Gazel</h5>
                    <h6>Sales and Marketing</h6>
                    <div>
                        <i>Itwitter</i>
                        <i>Ifacebook</i>
                        <i>Ilinkedin</i>
                        <i>Iinstagram</i>
                    </div>
                </div>
                <div className='AboutSection6-contents--2_item'>
                    <img src={aboutSec6Image04} alt="" />
                    <h5>Aishat Chinedu</h5>
                    <h6>Lead Blockchain Developer</h6>
                    <div>
                        <i>Itwitter</i>
                        <i>Ifacebook</i>
                        <i>Ilinkedin</i>
                        <i>Iinstagram</i>
                    </div>
                </div>
                <div className='AboutSection6-contents--2_item'>
                    <img src={aboutSec6Image05} alt="" />
                    <h5>Babatunde Victor</h5>
                    <h6>IT Support Executive</h6>
                    <div>
                        <i>Itwitter</i>
                        <i>Ifacebook</i>
                        <i>Ilinkedin</i>
                        <i>Iinstagram</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection6