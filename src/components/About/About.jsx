import React from 'react'
import "./About.css";
import aboutpic from "../../assets/about-me.webp";
import {BsAward} from "react-icons/bs"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container container_about">
        <div className='about_me'>
          <div className='about_me_img'>
            <img src={aboutpic} alt="pic"/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
          <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ years of Experience</small>
          </article>
          <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
          </article>
          </div>
          <p>Full stack developer who focuses on writing clean , elegant and efficient code. Love HTML5, CSS3, JS and a touch of JQuerry</p>

           <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About