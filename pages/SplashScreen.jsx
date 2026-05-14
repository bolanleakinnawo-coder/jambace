import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/splash.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page splash-page splash-layout">
      <div className="anim-logo splash-logo-wrapper">
        <div className="anim-pulse splash-logo-box">
          <svg viewBox="0 0 64 64" fill="none" className="splash-logo-svg">
            <path
              d="M32 4L8 16v16c0 13 9.5 25 24 28.5C46.5 57 56 45 56 32V16L32 4z"
              fill="rgba(255,255,255,0.95)"
            />

            <path
              d="M22 32l8 8 13-13"
              stroke="#800020"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <h1 className="anim-title splash-title">jambAce</h1>

      <p className="anim-sub splash-subtitle">Your Journey. Your Success.</p>

      <div className="anim-spin splash-spinner" />
    </div>
  );
};

export default SplashScreen;
