import React  from "react";
import MyNavbar from '../../components/Navbar/navbar.component'
import './about.styles.css';


function About() {
    return (
        <div>
          <MyNavbar />
            <div className='container'>
                <div className='row'>
                    <div className='col test'>
                        <h1 className='display-3 text-left'>About Me</h1>
                        <img className='myImage' src='https://www.centralchristian.edu/wp-content/uploads/2019/07/person-placeholder.png' alt='Kerry'/>
                        <p className='about-text'>My name is Kerry Smith. I'm a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize the data the design develops naturally, with this concept in mind I find my most creative moments are dictated by the data I'm working with.</p>
                    </div>
                    <div className='col kerry'>
                        <h1 className='display-3 text-right'>Languages</h1>
                        <p className='hobbies-text'>My name is Kerry Smith. I'm a full stack engineer with interests in front-end Javascript libraries and UI/UX design. When we can visualize your data the design develops naturally, with this concept in mind I find my most creative moments are dictated by the data I'm working with.</p>
                    </div>


                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-center mt-5'>

                </div>
            </div>
        </div>

    )
}

export default About;