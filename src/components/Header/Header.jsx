// import css
import './Header.css';
// import functions
import React from 'react'
// import assets
import ME from '../../assets/me.png';
// import components
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a className="scroll__down" href="#contact">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header