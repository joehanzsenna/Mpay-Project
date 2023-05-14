import React from 'react'
import sec5Img from '../../Assets/HomePageAssets/Sec5Img.svg'
import Hsec5Quote from '../../Assets/HomePageAssets/Hsec5Quote.png'

const HomeSection5 = () => {
  return (
    <div className='HomeSection5'>
        <div className='HomeSection5-contents'>
          <div className='HomeSection5-contents-item'>
            <img src={Hsec5Quote} alt="" className='Hsec5Quote'/>
            <p className='text--2 m-bottom1'>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
            <div className='HomeSection5-contents-item--inner'>
              <img src={sec5Img} alt="" />
              <div>
                <h2>Babatunde Alisha</h2>
                <p className='text--2'>Customer</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeSection5