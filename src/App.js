import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyNavbar from "./components/Navbar/navbar.component";
import Card from "./components/Card/cards.component";
import About from "./pages/About/about.component";

import './App.css';




function App() {
  

  return (
    <div>
        <About/>
        <MyNavbar />
        <Card />
      <Router>

        {/*<Route exact path='/' render ={() => <HomePage />} />*/}
        {/* <Route exact path='/portfolio' render ={() => <Cards />} /> */}
      </Router>
    </div>
  );
}

export default App;
