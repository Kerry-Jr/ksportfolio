import React from 'react';
import { Link } from 'react-router-dom';
import './landing.styles.css';

function Landing() {
  return (
     <section className='hero-section'>
       <div className="hero-image">
         <div className="hero-text container">
           <h1 className='hero-title'>My name is Kerry Smith</h1>
           <p className='hero-decoration'>And I'm a Full-Stack web developer</p>
           <p className='text-muted'>(Click the stars!)</p>
           <Link to='/about' as='button' className='btn-lg btn-danger'>Hire me</Link>
         </div>
       </div>
     </section>
  )
}

export default Landing;