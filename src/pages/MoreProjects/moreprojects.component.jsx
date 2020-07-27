import React, { Component } from 'react';
import Card from '../../components/Card/cards.component';
import projects from '../../projects.json';
import MyNavbar from '../../components/Navbar/navbar.component'
import './moreprojects.styles.css';

class MoreProjects extends Component {

 componentDidMount() {
   window.scrollTo(0,0);
 }

  state = {
    projects: projects
  };

  render() {
    const moreProjectsArr = this.state.projects.slice(0,3);
    const extraProjects = moreProjectsArr.map((extraProject) =>
       <div className='col-sm-4 md-6 lg-10 offset-1' key={extraProject.id}>
         <Card
            name={extraProject.name}
            image={extraProject.image}
            description={extraProject.description}
            liveLink={extraProject.liveLink}
            repository={extraProject.repository}
            technologies={extraProject.technologies}
         />
       </div>
    );
    return (
       <div className='container-fluid'>
         <MyNavbar />
         <h1 className='extra-header'>some more to look @</h1>
         <div className='row more-fade'>
           {extraProjects}
         </div>
       </div>
    )
  }
}
export default MoreProjects;