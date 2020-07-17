import React, { Component } from 'react';
import Card from '../../components/Card/cards.component';
import moreProjects from '../../moreProjects.json';
import MyNavbar from '../../components/Navbar/navbar.component'
import './moreprojects.styles.css';

class MoreProjects extends Component {


 componentDidMount() {
   window.scrollTo(0,0);
 }

  state = {
    moreProjects: moreProjects
  };

  render() {
    const moreProjectsArr = this.state.moreProjects;
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
         <h1 className='extra-header'>Some more Projects</h1>
         <div className='row'>
           {extraProjects}
         </div>
       </div>

    )
  }
}
export default MoreProjects;