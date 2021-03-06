import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewParticles from "./components/Particles/particles.component";
import Landing from "./pages/Landing/landing.component";
import About from "./pages/About/about.component";
import Portfolio from "./pages/Portfolio/portfolio.component";
import Contact from "./pages/Contact/contact.component";
import MoreProjects from "./pages/MoreProjects/moreprojects.component";


import "./App.css";

function App() {
  return (
    <div className="main-app container-fluid">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route
          exact
          path="/portfolio/moreprojects"
          render={() => <MoreProjects />}
        />
        <Route exact path="/contact" render={() => <Contact />} />
      </Router>
      <NewParticles />
    </div>
  );
}

export default App;
