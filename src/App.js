import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyNavbar from "./components/Navbar/navbar.component";

import About from "./pages/About/about.component";
import Portfolio from "./pages/Portfolio/portfolio.component";
import Contact from './pages/Contact/contact.component';

import './App.css';

function App() {

  return (
    <div>
        <MyNavbar />
            <Router>
                <Route exact path='/' render ={() => <About />} />
                <Route exact path='/portfolio' render ={() => <Portfolio />} />
                <Route exact path='/contact' render ={() => <Contact />} />
            </Router>
        </div>
  );
}

export default App;
