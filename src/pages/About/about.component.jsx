import React from "react";
import MyNavbar from '../../components/Navbar/navbar.component'
import kerry_smith from './../../assets/kerry-smith.jpg';
import './about.styles.css';


function About() {
  return (
    <div>
      <MyNavbar />
      <div className='container'>
        <div className='row'>
          <div className='col test'>
            <h1 className='display-3 text-center'>About Me</h1>
            <img className='myImage' src={kerry_smith} alt='Kerry' />
            <p className='about-text'>My name is Kerry Smith. I'm a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize the data the design develops intuitively and most importantly, it develops naturally. The data becomes the idea, the idea becomes the flow, and then the flow becomes the creative design I strive for with every new project.</p>
            <div className='kerry-info'>
              <p>
                I'm from and currently live and work in the Bay Area, Ca. During college I became a bar-tender to help pay for school and that taught me great inter-personal skills with many different people. After college, I began working for Vintrex Inc. I did your standard IT work taking care of more than 35 customers in the produce industry where food safety and government regulation is highly important.</p>
              <div className='kerry-info'>
                <p> My duties included building and setting up new work-stations for individuals, maintaining their in-house/cloud servers, managed their networks, SQL / authentication, and their online shopping carts in the cloud with services such as digital ocean, Amazon AWS, and ftp servers.</p>
              </div>
              <div className='kerry-info'>
                <p className='about-text'>
                  Recently, I graduated from University of California, Berkeley extension bootcamp. During my time there I was taught the MERN stack and have developed these skills further even after my time @ the bootcamp and reignited my passion of learning and technology.
                            </p>
              </div>

            </div>
          </div>
          <div className='col kerry'>
            <h1 className='display-3 text-center'>Languages</h1>
            <p className='hobbies-text'>
              <ul>
                <li>html 5</li>
                <li>css 3</li>
                <li>sass</li>
                <li>vanilla javascript</li>
                <li>jQuery</li>
                <li>react</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>redux</li>
                <li>Redux-form</li>
                <li>Python (work in progress...)</li>
                <li>mysql & mongo_db</li>
                <li>Firebase</li>
                <li>Mongoose.js</li>
              </ul>
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="skills">
                  <div className="skill-name">
                    <p>Design</p><p>85%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85 percent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  </div>
                  <br></br>
                  <div className="skill-name">
                    <p>SEO</p><p>95%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95 percent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="skills">
                  <div className="skill-name">

                    <p>Development</p><p>90%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90 percent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                  </div>
                  <br></br>
                  <div className="skill-name">
                    <p>Marketing</p><p>85%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85 percent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;