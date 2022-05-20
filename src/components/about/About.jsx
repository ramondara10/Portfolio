import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Entry Level</small> 
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>None</small> 
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small> 
            </article>


          </div>

          <p>
            I graduated from SMU as a Fullstack Developer the year 2022. I have experience working
            with Mongo DB, Express, React and Node.js. I've also worked with HTML, CSS, JS and Redux.
            I have knowledge in GraphQL and MySQL. I may lack the experience but I do enjoy coding and I will learn
            from my mentors and peers in order to provide the best work I can. 
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About