import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi' /*you can use theis lone to create more account and link them */

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://www.github.com" target='_blank'><FaGithub/></a>
        <a href="https://www.dribbble.com" target='_blank'><FiDribbble/></a>        
    </div>
  )
}

export default HeaderSocials