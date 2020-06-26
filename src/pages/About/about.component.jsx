import React  from "react";
import NewParticles from "../../components/Particles/particles.component";
import './about.styles.css';


function About() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 test'>
                        <h1 className='display-3 text-left'>About Me</h1>
                        <img className='myImage' src='https://picsum.photos/200/300' alt='Kerry'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt magni possimus qui repellendus sed tempora! A accusantium delectus, ducimus eaque est facilis fuga, hic ipsa ipsam laudantium
                            modi molestias nostrum officiis pariatur perspiciatis quam, quibusdam quos rem sapiente unde.</p>
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
            <NewParticles />
        </div>
    )
}

export default About;