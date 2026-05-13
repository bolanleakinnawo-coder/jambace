// Onboarding.jsx

import React, { useState } from "react";
import "./Onboarding.css";

import illustrationOne from "../assets/onboarding-illustration-1.svg";
import illustrationTwo from "../assets/onboarding-illustration-2.svg";
import illustrationThree from "../assets/onboarding-illustration-3.svg";

const screens = [
  {
    illustration: illustrationOne,
    title: (
      <>
        <span className="AceYour">ACE YOUR</span> <br />
        <span className="gold">JAMB</span>
      </>
    ),
    text: "Your personal JAMB companion for smarter preparation and better scores.",
  },

  {
    illustration: illustrationTwo,
    title: (
      <>
        <span className="screen2">All-in-One Prep</span>
      </>
    ),

    features: [
      { icon: "📚", label: "Past Questions" },
      { icon: "🧠", label: "AI Study Assistant" },
      { icon: "📈", label: "Progress Tracking" },
      { icon: "🎯", label: "Mock Exams" },
    ],
  },

  { 
    illustration: illustrationThree,
    title: (
      <>
        <span className="yourSuc">Your Success Starts Here</span>{" "}
      </>
    ),

    text: "Join thousands of students preparing smarter and scoring higher.",

    cta: true,
  },
];

const Onboarding = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < screens.length - 1) {
      setCurrent(current + 1);
    }
  };

  const screen = screens[current];
  const isLast = current === screens.length - 1;

  return (
    <div className="onboarding-root">
      <button className="skip-button" onClick={onComplete}>
        Skip
      </button>

      {/* Illustration top except second screen */}
      {current !== 1 && (
        <div className="onboarding-illustration">
          <img src={screen.illustration} alt="" />
        </div>
      )}

      <div className="onboarding-card">
        <h1 className="onboarding-title">{screen.title}</h1>

        {screen.text && <p className="onboarding-text">{screen.text}</p>}

        {screen.features && (
          <ul className="features-list">
            {screen.features.map((feature, index) => (
              <li key={index}>
                <span className="feature-icon">{feature.icon}</span>

                {feature.label}
              </li>
            ))}
          </ul>
        )}

        {/* Bottom image only for second screen */}
        {current === 1 && (
          <div className="bottom-illustration">
            <img src={screen.illustration} alt="" />
          </div>
        )}

        <div className="onboarding-bottom">
          <div className="navigation">
            {screens.map((_, index) => (
              <div
                key={index}
                className={`nav-dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <button className={`cta-button ${isLast ? 'get-started' : ''}`} onClick={isLast ? onComplete : next}>
            {isLast ? "Get Started" : ""}

            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
