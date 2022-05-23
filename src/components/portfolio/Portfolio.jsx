import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1'
import IMG2 from '../../assests/portfolio2'
import IMG3 from '../../assests/portfolio3'
import IMG4 from '../../assests/portfolio4'
import IMG5 from '../../assests/portfolio5'
import IMG6 from '../../assests/portfolio6'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          <img src={IMG1} alt="" />

          </div>
          <h3>This is Portfolio Title</h3>
          <a href="https://github.com/ramondara10/Tesla-Clone" className='btn' target='_blank'>Github</a>
          <a href="https://ramondara10.github.io/Tesla-Clone/" className='btn btn-primary' target='_blank'> Live Demo</a>

        </article>
      </div>
    </section>
  )
}

export default Portfolio