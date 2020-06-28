import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyNavbar from "./components/Navbar/navbar.component";
import NewParticles from "./components/Particles/particles.component";
import About from "./pages/About/about.component";
import Portfolio from "./pages/Portfolio/portfolio.component";
import Contact from './pages/Contact/contact.component';

import './App.css';

function App() {

    return (
        <div className='main-app container-fluid'>
            <MyNavbar />
            <Router>
                <Route exact path='/' render ={() => <About />} />
                <Route exact path='/portfolio' render ={() => <Portfolio />} />
                <Route exact path='/contact' render ={() => <Contact />} />
            </Router>
            <NewParticles
            className='particles'
            />
        </div>
    );
}

export default App;
