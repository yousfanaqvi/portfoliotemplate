import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsThreeDotsVertical} from "react-icons/bs"
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <BsThreeDotsVertical style={{color:"#4db5ff"}}/>
    </div>
  )
}

export default HeaderSocial