import React, {Component} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import Popover from "../../containers/modal/popover.component";

import './navbar.styles.css'

class Menu extends Component {

  render() {
    return (
       <div>
         <div className="row">
           <div className="col-md-12">
             <Router>
               <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='mainNav'>
                 <Navbar.Brand href="https://github.com/Kerry-Jr" className='nbar-name'>Kerry Smith</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto navi-links">
                     <Nav.Link href="/" className='nbar-name'>Home <i className="fa fa-home"></i></Nav.Link>
                     <Nav.Link href="/about" className='nbar-name'>About <i
                        className="fa fa-address-card"></i></Nav.Link>
                     <Popover/>
                     <Nav.Link href="/portfolio" className='nbar-name'>Projects <i
                        className="fa fa-file-archive"></i></Nav.Link>
                     <Nav.Link href="/contact" className='nbar-name'>Contact <i
                        className="fa fa-envelope"></i></Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
               <div className='menu-spacing'>

               </div>
               <br/>
             </Router>
           </div>
         </div>
       </div>
    )
  }
};

export default Menu;
