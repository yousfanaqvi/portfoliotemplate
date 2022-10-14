import cv from "../../assets/cv.pdf";
import React from "react"
function CTA() {
  return (
    <div className='CTA'>
        <a href={cv} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk!</a>
    </div>
  )
}

export default CTA