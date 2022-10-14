import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import Mypic from "../../assets/me2.png";
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
    <div className="container header__container" id="home">
      <h5>Hello I'm</h5>
      <h1>Yousfa</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>
        <div className='me'>
          <img src={Mypic} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>

  )
}

export default Header
