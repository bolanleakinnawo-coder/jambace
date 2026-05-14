import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../src/assets/onboarding-illustration-1.svg";
import image2 from "../src/assets/onboarding-illustration-2.svg";
import image3 from "../src/assets/onboarding-illustration-3.svg";
const B = {
  primary: "#800020",
  bg: "#f9eaed",
  muted: "#f0d0d7",
};


const SLIDES = [
  {
    image: image1,
    title: (
      <>
        Ace Your JAMB <br />
        With <span className="jambspan">jambAce</span>
      </>
    ),
    desc: (
      <>
        Practice smart, learn better <br />
        and achieve your dream admission.
      </>
    ),
  },

  {
    image: image2,
    title: "Personalized",
    highlight: "Study Experience",
    desc: "Get AI-powered study plans and progress tracking.",
  },

  {
    image: image3,
    title: "Track Your",
    highlight: "Progress",
    desc: "Monitor performance and improve daily.",
  },
];

function OnboardingScreen() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const isLast = slide === SLIDES.length - 1;

  const next = () => {
    if (isLast) {
      navigate("/signup");
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <div className="page onboarding-page">
      <div className="onboarding-topbar">
        <button className="skip-btn" onClick={() => navigate("/signup")}>
          Skip
        </button>
      </div>

      <div className="page-body onboarding-body">
        <div className="onboarding-illustration">
          <img src={SLIDES[slide].image} alt="Onboarding" />
        </div>

        <h2 className="onboarding-title">
          {SLIDES[slide].title}{" "}
          <span className="highlight">{SLIDES[slide].highlight}</span>
        </h2>

        <p className="onboarding-subtitle">{SLIDES[slide].desc}</p>

        <div className="dots-wrapper">
          {SLIDES.map((_, i) => (
            <div key={i} className={`dot ${i === slide ? "active-dot" : ""}`} />
          ))}
        </div>

        <button className="btn btn-primary" onClick={next}>
          {isLast ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default OnboardingScreen;
