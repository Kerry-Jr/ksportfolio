import React, { Component } from 'react';
import Card from '../../components/Card/cards.component';
import projects from '../../projects.json';
import NewParticles from "../../components/Particles/particles.component";

import './portfolio.styles.css';

class Portfolio extends Component {

    state = {
        projects: projects
    };

    render() {
        const myProjectsArr = this.state.projects;
        const showProjectsArr = myProjectsArr.map((project) =>
        <Card
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        liveLink={project.liveLink}
        repository={project.repository}
        technologies={project.technologies}

        />
        );

        return (
        <div className='h-100 d-inline-block'>
            <div className='row'>
                <div className='col-12'>
                    <div className='col showProjects'>

                        {showProjectsArr}
                    </div>
                </div>
                <NewParticles />
            </div>
        </div>

        )
    }
}

export default Portfolio;