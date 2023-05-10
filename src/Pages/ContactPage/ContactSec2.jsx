import React from 'react'
import contactSec2Office from '../../Assets/ContactPageAssets/contactSec2Office.png'
import contactSec2Support from '../../Assets/ContactPageAssets/contactSec2support.png'
import contactSec2Mail from '../../Assets/ContactPageAssets/contactSec2mail.png'

const ContactSec2 = () => {
  return (
    <div className='ContactSec2'>
        <div className='ContactSec2-contents'>
            <div className='ContactSec2-contents--1'>
                <div className='ContactSec2-contents--1__item1'>
                    <h1>Get In Touch</h1>
                    <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare tellus vitae elit est tellus porta malesuada ut arcu.</p>
                </div>
                <div className='ContactSec2-contents--1__item2'>
                    <div className='ContactSec2-contents--1__item2-inner'>
                        <img src={contactSec2Office} alt="" />
                        <div>
                            <h5>Office Address</h5>
                            <p>Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus </p>
                        </div>
                    </div>
                    <div className='ContactSec2-contents--1__item2-inner'>
                        <img src={contactSec2Support} alt="" />
                        <div>
                            <h5>Phone Number</h5>
                            <p>+234 567 9805 606</p>
                            <p>+1  54 567805 606</p>
                        </div>
                    </div>
                    <div className='ContactSec2-contents--1__item2-inner'>
                        <img src={contactSec2Mail} alt="" />
                        <div>
                            <h5>Email Address</h5>
                            <p>Support@mpay.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ContactSec2-contents--2'>
                <form>
                    <h2>Your Details</h2>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" placeholder='Your Name'/>
                    </div>
                    <div>
                        <label htmlFor="name">Email Address</label>
                        <input type="email" name="email" id="" placeholder='Your Email'/>
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="" placeholder='Subject Message'/>
                    </div>
                   <div>
                    <label htmlFor="comment/questions">Comment/Questions</label>
                        <input type="text" name="comment/questions" id="" placeholder='your Message...'/>
                   </div>
                   <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactSec2