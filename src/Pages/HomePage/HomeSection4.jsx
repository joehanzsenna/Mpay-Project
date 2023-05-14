import React from 'react'
import Hsec4Icon01 from '../../Assets/HomePageAssets/Hsec4Icon01.png'
import Hsec4Icon02 from '../../Assets/HomePageAssets/Hsec4Icon02.png'
import Hsec4Icon03 from '../../Assets/HomePageAssets/Hsec4Icon03.png'
import Hsec4Icon04 from '../../Assets/HomePageAssets/Hsec4Icon04.png'
import Hsec4Icon05 from '../../Assets/HomePageAssets/Hsec4Icon05.png'
import { HiArrowNarrowRight } from 'react-icons/hi';


const HomeSection4 = () => {
  return (
    <div className='HomeSection4'>
        <div className='HomeSection4-contents'>
            <div className='HomeSection4-contents-header'>
                <h2 className='header--2 m-bottom1'>Our Services</h2>
                <p className='text--1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna </p>
            </div>
            <div className='HomeSection4-contents-inner'>
                <div className='HomeSection4-contents-inner__item'>
                    <img src={Hsec4Icon01} alt="" className='Hsec4Icon m-bottom1'/>
                    <h5 className='header--3 m-bottom1'>Payment Management</h5>
                    <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <div className='HomeSec4ArrowContent'>
                        <h5 className='header--4'>Learn More</h5>
                        <HiArrowNarrowRight className='HomeSec4Arrow'/>
                    </div>
                </div>
                <div className='HomeSection4-contents-inner__item'>
                    <img src={Hsec4Icon02} alt="" className='Hsec4Icon m-bottom1'/>
                    <h5 className='header--3 m-bottom1'>Payment Management</h5>
                    <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <div className='HomeSec4ArrowContent'>
                        <h5 className='header--4'>Learn More</h5>
                        <HiArrowNarrowRight className='HomeSec4Arrow'/>
                    </div>
                </div>
                <div className='HomeSection4-contents-inner__item'>
                    <img src={Hsec4Icon03} alt="" className='Hsec4Icon m-bottom1'/>
                    <h5 className='header--3 m-bottom1'>Payment Management</h5>
                    <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <div className='HomeSec4ArrowContent'>
                        <h5 className='header--4'>Learn More</h5>
                        <HiArrowNarrowRight className='HomeSec4Arrow'/>
                    </div>
                </div>
                <div className='HomeSection4-contents-inner__item'>
                    <img src={Hsec4Icon04} alt="" className='Hsec4Icon m-bottom1'/>
                    <h5 className='header--3 m-bottom1'>Payment Management</h5>
                    <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <div className='HomeSec4ArrowContent'>
                        <h5 className='header--4'>Learn More</h5>
                        <HiArrowNarrowRight className='HomeSec4Arrow'/>
                    </div>
                </div>
                <div className='HomeSection4-contents-inner__item'>
                    <img src={Hsec4Icon05} alt="" className='Hsec4Icon m-bottom1'/>
                    <h5 className='header--3 m-bottom1'>Payment Management</h5>
                    <p className='text--1 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <div className='HomeSec4ArrowContent'>
                        <h5 className='header--4'>Learn More</h5>
                        <HiArrowNarrowRight className='HomeSec4Arrow'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection4