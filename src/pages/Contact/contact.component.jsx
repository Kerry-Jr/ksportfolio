import React from 'react';
import MyNavbar from '../../components/Navbar/navbar.component'

import './contact.styles.css';

function Contact() {
  return (
     <div className="container-fluid">
       <MyNavbar/>
       <h1 className='social-header'>Please contact me @</h1>
       <div className='container social-platform contact-fade'>
         <div className='row'>
           <div className='col social'>
             <a href='mailto:kerrysfs@gmail.com' className='text-mail'>
               <i className="far fa-envelope social-style"></i>
             </a>

             <div className='social-text'>
               Email
             </div>
           </div>
           <div className='col social'>
             <a href="https://github.com/Kerry-jr" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-github social-style"></i>
             </a>
             <div className='social-text'>
               Github
             </div>
           </div>
           <div className='col social'>
             <a href="https://www.linkedin.com/in/kerry-smith-2954221ab/" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-linkedin-in social-style"></i>
             </a>
             <div className='social-text'>
               LinkedIn
             </div>
           </div>
         </div>

       </div>

     </div>
  )
}

export default Contact;
