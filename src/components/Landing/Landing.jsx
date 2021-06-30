import React from "react";
import flash from "./../../assets/flash.png";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <h1>Fast?</h1>
          <h1>Correct?</h1>
          <h1>Quick?</h1>
        </div>
      </div>
      <div className="landing-right">
        <img className="flash-image" src={flash} alt="hero" />
      </div>
    </div>
  );
}

export default Landing;