import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faBehance, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faHome, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer '>
        <div className='container f-flex'>

            <div className='footer-left'>
        <a><img src={logo}  className='logo' alt="logo" /></a>
    </div>

    <div className='footer-center'>
 <h4>About us</h4>
 <a className='footer-links'>About me</a>
 <a className='footer-links'>Services</a>
 <a className='footer-links'>Experiences</a>
    </div>

    <div className='footer-right'>
 <h4>Contact us</h4>

            <div className='contact-footer'>
                <div className='f-icon'>
                <FontAwesomeIcon icon={faHome} className='icon-footer' />
                <span>Rustem Rustemov 44E</span>
                </div>
                <div className='f-icon'>
                <FontAwesomeIcon icon={faEnvelope} className='icon-footer' />
                <span>samedova77n@gmail.com</span>
                </div>
                <div className='f-icon'>
                <FontAwesomeIcon icon={faPhone} className='icon-footer' />
                <span>+994 50 525 10 28</span>
                </div>
            </div>
    </div>
     <div className='sosial-media'>
        <h4>Follow us</h4>
        <a className='sosial-item'> <FontAwesomeIcon icon={faGithub} className='icon-item' /> </a>
        <a className='sosial-item'> <FontAwesomeIcon icon={faBehance} className='icon-item' /> </a>
        <a className='sosial-item'> <FontAwesomeIcon icon={faFacebook} className='icon-item' /> </a>
        <a className='sosial-item'> <FontAwesomeIcon icon={faLinkedin} className='icon-item' /> </a>
    </div>

    </div>
    <div className='footer-bottom'>
      <span>© 2020 Copyright: <a className='website'>www.itbrains.com</a> </span>
    </div>
    </div>
  )
}

export default Footer
