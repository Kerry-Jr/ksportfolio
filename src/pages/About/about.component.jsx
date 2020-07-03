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
                        <p className='about-text'>My name is Kerry Smith. I'm a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize the data the design develops naturally, with this concept in mind I find my most creative moments are dictated by the data I'm working with.</p>
                    </div>
                    <div className='col kerry'>
                        <h1 className='display-3 text-right'>Languages</h1>
                        <p className='hobbies-text'>
                          <ul>
                            <h4></h4>
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
                            <li>Python</li>



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