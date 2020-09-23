import React from 'react';


import './landing.styles.css';

function Landing() {
  return (
     <section className='hero-section'>
       <div className="hero-image">
         <div className="hero-text container">
           <p className='hero-title'><span>Hello, my name is Kerry Smith</span></p>
           <p className='hero-title'></p>
           <p className='hero-decoration'>and I'm a <span className="landing-span">Full-</span>Stack web developer</p>
           <p className='landing-instruction'>Click the background!</p>
           {/*<button type="button" className="enter-btn"><a href="/about">Continue</a></button>*/}
           <button type="button" className="enter-btn" onClick={() => window.location.href = '/about'}>
             - ENTER -
           </button>

           {/*<Link to='/about' className='btn-lg btn-warning enter-btn earth'>Enter</Link>*/}
         </div>
       </div>
     </section>
  )
}

export default Landing;
