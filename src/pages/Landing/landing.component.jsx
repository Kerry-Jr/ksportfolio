import React from "react";
import landing from "../../assets/landing1.jpg";
import { Button } from 'react-bootstrap'
import "./landing.styles.css";

function Landing() {
  return (
    <section className="hero-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="hero-text container">
          <p className="hero-title">
            <span>Hello, my name is Kerry Smith</span>
          </p>
          <p className="hero-title"></p>
          <p className="hero-decoration">
            and I'm a <span className="landing-span">Full-</span>Stack web
            developer
          </p>
          <p className="landing-instruction">Click the background!</p>
          <Button
             as={"label"}
             variant="primary"
             size="lg"
            type="button"
            className="enter-btn"
            onClick={() => (window.location.href = "/about")}
          >
            - ENTER -
          </Button>
          <div>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
