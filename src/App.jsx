// shortcut rafce

import React from 'react'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Exp";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return ( 
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App