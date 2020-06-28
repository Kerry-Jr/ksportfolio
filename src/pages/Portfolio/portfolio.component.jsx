import React, { Component } from 'react';
import Card from '../../components/Card/cards.component';
import projects from '../../projects.json';


import './portfolio.styles.css';
import NewParticles from "../../components/Particles/particles.component";

class Portfolio extends Component {

    state = {
        projects: projects
    };

    render() {
        const myProjectsArr = this.state.projects;
        const showProjectsArr = myProjectsArr.map((project) =>
        <Card
        key={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        liveLink={project.liveLink}
        repository={project.repository}
        technologies={project.technologies}
        />
        );

        return (
            <div className='container'>
                <div className='row'>
                    {showProjectsArr}
                </div>
                <NewParticles/>
            </div>



        )

    }
}

export default Portfolio;