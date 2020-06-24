import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown } from 'react-bootstrap'


class MyNavbar extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#">Kerry Smith</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Projects</Nav.Link>
                                    <Nav.Link href="#">Experience</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Contact Me</NavDropdown.Item>
                                        <NavDropdown.Item href="#">My Github</NavDropdown.Item>
                                    </NavDropdown>
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