import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>
          Building Digital Experiece that Inspire
        </h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into seamles and visually stunning Web Solutions
        </p>
      </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/re.png' alt='' />
          </div>
          <img src='./assets/images/pro.png' alt='' />
        </div>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/html.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/css.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/js.png' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero