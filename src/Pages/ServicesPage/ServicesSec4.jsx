import React from 'react'
import { Link } from 'react-router-dom'
import servicesSec4Icon01 from '../../Assets/ServicesPageAssets/ServicesSec4-icon01.png'
import servicesSec4Icon02 from '../../Assets/ServicesPageAssets/ServicesSec4-icon02.png'
import servicesSec4Icon03 from '../../Assets/ServicesPageAssets/ServicesSec4-icon03.png'
import servicesSec4Icon04 from '../../Assets/ServicesPageAssets/ServicesSec4-icon04.png'
import servicesSec4Icon05 from '../../Assets/ServicesPageAssets/ServicesSec4-icon05.png'
import servicesSec4Icon06 from '../../Assets/ServicesPageAssets/ServicesSec4-icon06.png'

const ServicesSec4 = () => {
  return (
    <div className='servicesSec4'>
        <div className='servicesSec4-contents'>
            <div className='servicesSec4-contents--1'>
                <h2>Our Service</h2>
                <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna </p>
            </div>
            <div className='servicesSec4-contents--2'>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon01} alt="" />
                    <h5>Payment Management</h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon02} alt="" />
                    <h5>Personal Dashboard</h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augAugue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon03} alt="" />
                    <h5></h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon04} alt="" />
                    <h5></h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon05} alt="" />
                    <h5></h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className='servicesSec4-contents--2__item'>
                    <img src={servicesSec4Icon06} alt="" />
                    <h5></h5>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug</p>
                    <Link to='/'>
                        <p>Learn More</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSec4