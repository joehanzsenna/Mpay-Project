import React from 'react'
import spiralImg from '../../Assets/HomePageAssets/Spiral 3.png'

const FooterSec1 = () => {
  return (
    <div className='FooterSec1'>
        <div className='FooterSec1-contents'>
          <img src={spiralImg} alt="" className='spiralImg'/>
            <h1 className='header--2 FooterSec1-header'>Keep Updated About Our Product</h1>
            <form className='FooterSec1-form'>
              <input type="email" placeholder='YOUR EMAIL ADDRESS' className='FooterSec1-form__input'/>
              <input type="submit" placeholder='Submit' className='FooterSec1-form__input-sub'/>
            </form>
        </div>
    </div>
  )
}

export default FooterSec1