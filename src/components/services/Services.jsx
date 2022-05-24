import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Ecommerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end Development</p>
            </li>
          </ul>

        </article>
        
        {/*End of Web Development when more skills are acquired you can use the same code to add more in different categories*/}

        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Certification In Progress</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services