import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from "./components/about/about.component";
import MyNavbar from './components/navabr/navbar.component.jsx'

function App() {
  return (
    <div>
      <MyNavbar />
      <Router>
        <Route exact path='/' render ={() => <HomePage/>} />
      </Router>
    </div>
  );
}

export default App;
