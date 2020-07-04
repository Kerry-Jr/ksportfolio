import React  from "react";
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
                        <h1 className='display-3 text-left'>About Me</h1>
                        <img className='myImage' src={kerry_smith} alt='Kerry'/>
                        <p className='about-text'>My name is Kerry Smith. I'm a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize the data the design develops naturally, with this concept in mind I find that my most creative moments are dictated by the data I'm working.</p>
                      <div className='kerry-info'>
                        <p>
                          I'm from and currently live and work in the Bay Area, Ca. During college I became a bar-tender to help pay for school and that taught me great inter-personal skills with many different people. After college, I began working for Vintrex Inc. I did your standard IT work taking care of more than 35 customers in the produce field. My duties include building and setting up new work-stations for individuals. Maintain their in house built by us Server. Managed their networks, SQL server, shopping carts in the cloud with services such as digital ocean, Amazon AWS, and ftp servers, authentication, and etc.</p>
                          <div className='kerry-info'>
                            <p className='about-text'>
                              Recently, I graduated from University of California, Berkeley extension from their bootcamp. During my time there I was taught the MERN stack and have developed these skills further even after my time @ the bootcamp.
                            </p>
                          </div>

                      </div>
                    </div>
                    <div className='col kerry'>
                        <h1 className='display-5 text-right'>Languages & Frameworks</h1>
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
                    </div>


                </div>
            </div>
            {/*<div className='row'>*/}
            {/*    <div className='col-12 text-center mt-5'>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )
}

export default About;