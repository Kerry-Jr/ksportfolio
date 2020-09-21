import React from 'react';
import Particles from "react-particles-js";

import './particles.style.css';

class NewParticles extends React.Component {
  render() {
    return (
       <div className='container fluid sCanvas'>
         <div className='particlesBackground' style={{
           position: "absolute",
           top: 0,
           left: 0,
           width: "100%",
           height: "100%",
           opacity: "1"
         }}>
           <Particles id="particles-js" params={{
             background: {
               color: {
                 value: "#000000"
               }
             },
             fpsLimit: 144,
             interactivity: {
               detectsOn: "window",
               events: {
                 onClick: {
                   enable: true,
                   mode: "repulse"
                 },
                 onHover: {
                   enable: true,
                   mode: "grab",
                   color: {
                     value: "#909CBC"
                   }
                 },
                 resize: true
               },
               modes: {
                 bubble: {
                   distance: 400,
                   duration: 2,
                   opacity: 0.6,
                   size: 10,
                   speed: 3
                 },
                 push: {
                   quantity: 4,
                   particles_nb: 4
                 },
                 repulse: {
                   distance: 500,
                   duration: 0.4
                 },
                 grab: {
                   distance: 250,
                   line_linked: {
                     opacity: 1
                   }
                 }
               }
             },
             particles: {
               color: {
                 value: "#408CAA"
               },
               links: {
                 color: "#FFFFFF",
                 distance: 200,
                 enable: false,
                 opacity: 0.5,
                 width: 8
               },
               collisions: {
                 enable: true
               },
               move: {
                 direction: "none",
                 enable: true,
                 outMode: "bounce",
                 random: true,
                 speed: 7,
                 straight: false
               },
               number: {
                 density: {
                   enable: true,
                   value_area: 800
                 },
                 value: 75
               },
               opacity: {
                 value: 0.5
               },
               shape: {
                 type: 'star'
               },
               size: {
                 random: true,
                 value: 5,
                 anim: {
                   enable: true,
                   speed: 40,
                   size_min: 40,
                   sync: true
                 }
                 // speed: 40
               }
             },
             detectRetina: true
           }}/>

         </div>
       </div>
    )
  }
}

export default NewParticles;
