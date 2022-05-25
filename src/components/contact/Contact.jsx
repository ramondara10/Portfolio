import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className='contact__options'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>tonyalvarado199407@gmail.com</h5>
            <a href="mailto: tonyalvarado199407@gmail.com">Send a Message</a>
          </article>
          <article className='contact__options'>
            <MdOutlineEmail/>
            <h4>Messenger</h4>
            <h5>Ramon Alvarado</h5>
            <a href="mailto: tonyalvarado199407@gmail.com">Send a Message</a>
          </article>
          <article className='contact__options'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>tonyalvarado199407@gmail.com</h5>
            <a href="mailto: tonyalvarado199407@gmail.com">Send a Message</a>
          </article>
        </div>

      {/*End of contact*/}

      <form action=""></form>

      </div>

    </section>
  )
}

export default Contact
