import React  from "react";

import './about.styles.css';


function About() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 test'>
                        <h1 className='display-3 text-left'>About Me</h1>
                        <img className='myImage' src='https://picsum.photos/200/300' alt='Kerry'/>
                    </div>
                    <div className='col-md-4 kerry'>
                        <p className='myBio'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consectetur culpa eius, eligendi
                            explicabo fugit iusto magnam maiores molestiae, nihil nostrum numquam porro quae sint vel voluptatum!
                            Consequatur exercitationem,
                            mollitia odit qui sunt voluptatibus. Ad amet, architecto autem corporis cum earum, esse laborum possimus,
                            provident sed soluta voluptas voluptates.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;