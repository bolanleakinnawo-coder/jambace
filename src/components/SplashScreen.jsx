import React from "react";
import img from "../assets/logo.webp";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-root">
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <img src={img} alt="JAMB ACE Logo" />
        </div>

        <h1 className="splash-title">
          JAMB <span className="gold">ACE</span>
        </h1>

        <p className="splash-tagline">Your UTME Companion</p>

        <div className="splash-divider">
          <div className="splash-divider-line" />
          <div className="splash-divider-diamond" />
          <div className="splash-divider-line right" />
        </div>

        <div className="splash-dots">
          <div className="splash-dot" />
          <div className="splash-dot" />
          <div className="splash-dot" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
