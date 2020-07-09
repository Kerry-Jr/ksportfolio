import React, { Component } from 'react';
import Card from '../../components/Card/cards.component';
import projects from '../../projects.json';
import MyNavbar from '../../components/Navbar/navbar.component'
import './portfolio.styles.css';

class Portfolio extends Component {

    state = {
        projects: projects
    };

    render() {
        const myProjectsArr = this.state.projects;
        const showProjectsArr = myProjectsArr.map((project) =>
            <div className='col-sm-4 md-6 lg-10 offset-1 '>
                <Card
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    liveLink={project.liveLink}
                    repository={project.repository}
                    technologies={project.technologies}
                />
            </div>

        );

        return (
            <div className='container-fluid'>
                <MyNavbar />
                <h1 className='card-header'>Projects I've completed solo and with collaborators</h1>
                <div className='row'>
                    {showProjectsArr}
                </div>
            </div>

        )
    }
}
export default Portfolio;