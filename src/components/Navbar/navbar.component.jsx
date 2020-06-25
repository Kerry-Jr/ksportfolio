import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import './navbar.styles.css'

class MyNavbar extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='mainNav'>
                                <Navbar.Brand href="#">Kerry Smith</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto navi-links">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Projects</Nav.Link>
                                    <Nav.Link href="#">LinkedIn</Nav.Link>
                                    <Nav.Link href="#">Github</Nav.Link>
                                    <Nav.Link href="#">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    
                                </Route>
                                <Route path="#">
                                   
                                </Route>
                                <Route path="#">
                                    
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
};

export default MyNavbar;