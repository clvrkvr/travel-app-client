import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="videos/milky-way-time-lapse.mp4" autoPlay loop muted />
      <h1>YOUR ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/services"
        >
          CHOOSE YOUR TRIP
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
