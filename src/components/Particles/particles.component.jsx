import React, { Component } from 'react';
import Particles from "react-particles-js";

import './particles.style.css';

class NewParticles extends Component {
  render() {
    return (
       <div className='container fluid sCanvas'>
         <div className='particlesBackground'>
           <Particles id="particles-js" params={{
             background: {
               color: {
                 value: "#000000"

               }
             },
             fpsLimit: 60,
             interactivity: {
               detectsOn: "window",
               events: {
                 onClick: {
                   enable: true,
                   mode: "repulse"
                 },
                 onHover: {
                   enable: true,
                   mode: ['trail', 'grab']
                 },
                 resize: true
               },
               modes: {
                 bubble: {
                   distance: 400,
                   duration: 2,
                   opacity: 0.6,
                   size: 10,
                   speed: 4
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
                     opacity: 0.7
                   }
                 },
                 trail: {
                   delay: 0.019,
                   quantity: 1,

                 },
                 remove: {
                   particles_nb: 2
                 }
               }
             },
             particles: {
               color: {
                 value: "random"
               },
               links: {
                 color: "#445aa8",
                 distance: 50,
                 enable: true,
                 opacity: 1,
                 width: 0.5
               },
               collisions: {
                 enable: true
               },
               move: {
                 direction: "none",
                 enable: true,
                 outMode: "destroy",
                 random: true,
                 speed: 5,
                 straight: false,
                 warp: false,
                 noise: {
                   enable: false,
                   delay: {
                     value: 10
                   }
                 },
                 trail: {
                   length: 5,
                   enable: false
                 }
               },
               number: {
                 density: {
                   enable: true,
                   value_area: 2000
                 },
                 value: 100
               },
               opacity: {
                 value: 1
               },
               shape: {
                 type: ["circle", "star", "triangle", "square"]
               },
               size: {
                 random: true,
                 value: 6,
                 anim: {
                   enable: true,
                   speed: 10,
                   size_min: 40,
                   size_max: 5000,
                   sync: true
                   // startValue: "min"
                   // destroy: "max"
                 }}},
             detectRetina: true
           }}/>
         </div>
       </div>
    )
  }
}

export default NewParticles;
