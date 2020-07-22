import React from "react";
import MyNavbar from '../../components/Navbar/navbar.component'
import AboutList from "./about-list.component";
import kerry_smith from './../../assets/kerry-smith.jpg';
import './about.styles.css';

function About() {
  return (
    <div>
      <MyNavbar />
      <div className='container'>
        <div className='row'>
          <div className='col test'>
            <h1 className='display-3 text-center about-header'>About Me</h1>
            <img className='myImage' src={kerry_smith} alt='Kerry' />
            <p className='about-text'>My name is Kerry Smith. I am a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize data the design develops intuitively and most importantly, it develops naturally. To see the front and back-end come together bit by bit is truly rewarding.</p>
            <div className='kerry-info'>
              <p>
                I'm from and currently live and work in the Bay Area, Ca. During college I became a bar-tender to help pay for school and that taught me great interpersonal skills with many different people. After college, I began working for Vintrex Inc and then Parsemony Inc. I did your standard IT work taking care of more than 35 customers in the produce industry where food safety and government regulation was highly important.</p>
              {/*<div className='kerry-info'>*/}
              {/*  <p> My duties included building and setting up new work-stations for individuals, maintaining their in-house/cloud servers, managed their networks, SQL / authentication, and their online shopping carts in the cloud with services such as digital ocean, Amazon AWS, and ftp servers.</p>*/}
              {/*</div>*/}
              <div className='kerry-info'>
                <p className='about-text'>
                  Recently, I graduated from the University of California, Berkeley extension bootcamp and received my certificate in Full stack web development. During my time there I was taught the MERN stack and have developed these skills further even after my time @ the bootcamp and reignited my passion for learning and technology.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 kerry'>
            <h1 className='display-3 text-center about-header'>Languages</h1>
            <span className='hobbies-text'>
              <AboutList />

              <br/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;