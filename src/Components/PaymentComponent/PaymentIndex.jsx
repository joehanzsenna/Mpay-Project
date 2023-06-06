import React from 'react'
import '../PaymentComponent/PaymentStyle.css'
import imgBinance from '../../Assets/HomePageAssets/binance.png'
import imgQuickteller from '../../Assets/HomePageAssets/quick teller.png'
import imgTrust from '../../Assets/HomePageAssets/trust walllet.png'
import imgPaypal from '../../Assets/HomePageAssets/paypal.png'

const PaymentIndex = () => {
  return (
    <div className='PaymentIndex'>
        <div className='PaymentIndex-contents'>
          <img src={imgBinance} alt="" className='paymentIcons'/>
          <img src={imgQuickteller} alt="" className='paymentIcons'/>
          <img src={imgTrust} alt="" className='paymentIcons'/>
          <img src={imgPaypal} alt="" className='paymentIcons'/>
        </div>
    </div>
  )
}

export default PaymentIndex