import React from 'react';


import './landing.styles.css';

function Landing() {
  return (
    <section className='hero-section'>
      <div className="hero-image">
        <div className="hero-text container">
          <p className='hero-title'>Hello, my name is Kerry Smith</p>
          <p className='hero-title'></p>
          <p className='hero-decoration'>and I'm a Full-Stack web developer</p>
          <p>(Click the background!)</p>
          <button className="enter-btn"><a href="/about">Continue</a></button>


          {/*<Link to='/about' className='btn-lg btn-warning enter-btn earth'>Enter</Link>*/}
        </div>
      </div>
    </section>
  )
}

export default Landing;
