import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className='contact__options'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tonyalvarado199407@gmail.com</h5>
            <a href="mailto: tonyalvarado199407@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__options'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ramon Alvarado</h5>
            <a href="https://m.me/ramonantonio.alvaradorivera.9" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__options'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatApp</h4>
            <h5>+1 469-216-1208</h5>
            <a href="https://api.whatsapp.com/send?phone=+14692161208" target='_blank'>Send a Message</a>
          </article>
        </div>

      {/*End of contact*/}

      <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message ' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
      </form>

      </div>

    </section>
  )
}

export default Contact
