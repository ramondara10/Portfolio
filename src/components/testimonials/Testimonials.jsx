import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <div className="conatiner testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar image" />
          </div>

          <h5>Testimonial Section</h5>
            <small className='client__review'>
              This section is  placeholder for actual reviews. Currently I do not have any 
              any reviews so it serves as a showcase.

            </small>
          
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar image" />
          </div>

          <h5>Testimonial Section</h5>
            <small className='client__review'>
              This section is  placeholder for actual reviews. Currently I do not have any 
              any reviews so it serves as a showcase.

            </small>
          
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar image" />
          </div>

          <h5>Testimonial Section</h5>
            <small className='client__review'>
              This section is  placeholder for actual reviews. Currently I do not have any 
              any reviews so it serves as a showcase.

            </small>
          
        </article>
  
      </div>
    </section>
  )
}

export default Testimonials