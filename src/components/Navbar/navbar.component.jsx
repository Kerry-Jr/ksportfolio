import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import './navbar.styles.css'

class Menu extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='mainNav'>
                                <Navbar.Brand href="#" className='nbar-name'>Kerry Smith</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto navi-links">
                                    <Nav.Link href="/" className='nbar-name' >Home</Nav.Link>
                                    <Nav.Link href="/about" className='nbar-name' >About</Nav.Link>
                                    <Nav.Link href="/portfolio" className='nbar-name' >Projects</Nav.Link>
                                    <Nav.Link href="/contact" className='nbar-name' >Contact</Nav.Link>
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