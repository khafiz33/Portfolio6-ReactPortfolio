// import css
import './Nav.css';
// import functions
import React from 'react';
// import icons
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#');
  return (
    <nav>
      <a className={activeNav === '#home' ? 'active' : ''} onClick={() => setActiveNav('#home')} href="#home"><AiOutlineHome /></a>
      <a className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} href="#about"><AiOutlineUser /></a>
      <a className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} href="#experience"><BiBook /></a>
      <a className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')} href="#services"><RiServiceLine /></a>
      <a className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav