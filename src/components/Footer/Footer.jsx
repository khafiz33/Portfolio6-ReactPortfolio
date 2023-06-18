// import css
import './Footer.css';
// import functions
import React from 'react';
// import icons
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#home">KHAFIZ</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KHAFIZ Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer