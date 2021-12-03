import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer__top">
                <h1 className="gradient__text" >Do you want to step in to the future before others</h1>
                <button>Request Early Access</button>
            </div>
            <div className="footer__bottom">
               <div className="footer__bottom-h">
                   <h1>GPT-3</h1>
                   <p>Crechterwoord K12 182 DK<br/> Alknjkcb, All Rights Reserved</p>
               </div>
               <div className="footer__bottom-r">
                <div className="footer__bottom-s">
                    <h6>Links</h6>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="footer__bottom-s">
                    <h6>Company</h6>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="footer__bottom-s">
                    <h6>Get in touch</h6>
                    <p>Crechterwoord K12 <br/>182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>    
               </div>
            </div>
            <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}

export default Footer
