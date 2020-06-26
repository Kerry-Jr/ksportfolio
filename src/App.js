import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyNavbar from "./components/Navbar/navbar.component";
// import Card from "./components/Card/cards.component";
import About from "./pages/About/about.component";
// import NewParticles from "./components/Particles/particles.component";
import Portfolio from "./pages/Portfolio/portfolio.component";

import './App.css';

function App() {

  return (
    <div>
        <MyNavbar />
            <Router>
                <Route exact path='/' render ={() => <About />} />
                <Route exact path='/portfolio' render ={() => <Portfolio />} />
            </Router>
        </div>
  );
}

export default App;
