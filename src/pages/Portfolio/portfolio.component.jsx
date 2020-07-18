import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/cards.component';
import projects from '../../projects.json';
import MyNavbar from '../../components/Navbar/navbar.component'
import './portfolio.styles.css';

class Portfolio extends Component {

    state = {
        projects: projects
    };



    render() {
        const myProjectsArr = this.state.projects.slice(3,7);
        const showProjectsArr = myProjectsArr.map((project) =>
            <div className='col-sm-4 md-6 lg-10 offset-1' key={project.id}>
                <Card
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
                    <div className='container btnMore'>
                      <Link to='/portfolio/moreprojects'>
                        <button className="slide_from_left">...more projects</button>
                      </Link>
                    </div>
            </div>

        )
    }
}
export default Portfolio;