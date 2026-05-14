import { useState, useEffect } from "react";

// ─── THEME ────────────────────────────────────────────────────────
const B = {
  primary: "#800020",
  light: "#a0002a",
  dark: "#5a0016",
  bg: "#f9eaed",
  muted: "#f0d0d7",
};

// ─── FIELD COMPONENT ──────────────────────────────────────────────
function Field({ icon, placeholder, type = "text" }) {
  const [show, setShow] = useState(false);
  const isPass = type === "password";

  return (
    <div className="field">
      <span className="icon">{icon}</span>

      <input
        placeholder={placeholder}
        type={isPass && !show ? "password" : "text"}
        autoComplete="off"
      />

      {isPass && (
        <span className="eye" onClick={() => setShow((s) => !s)}>
          {show ? "🙈" : "👁️"}
        </span>
      )}
    </div>
  );
}

// ─── 1. SPLASH SCREEN ────────────────────────────────────────────
function SplashScreen() {
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
              stroke={B.primary}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <h1 className="anim-title splash-title">JAMP</h1>

      <p className="anim-sub splash-subtitle">Your Journey. Your Success.</p>

      <div className="anim-spin splash-spinner" />
    </div>
  );
}

// ─── 2. ONBOARDING SCREEN ────────────────────────────────────────
const SLIDES = [
  {
    svg: (
      <svg className="illustration-container" viewBox="0 0 260 220" fill="none">
        <circle cx="130" cy="100" r="90" fill={B.bg} />
        <circle cx="130" cy="75" r="36" fill={B.primary} />
        <ellipse cx="130" cy="150" rx="52" ry="32" fill={B.primary} />
        <rect x="170" y="48" width="44" height="44" rx="12" fill={B.muted} />

        <path
          d="M182 71l7 7 12-12"
          stroke={B.primary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect x="46" y="56" width="38" height="38" rx="12" fill={B.muted} />

        <path
          d="M55 75h20M65 65v20"
          stroke={B.primary}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),

    title: "Ace Your JAMB With",
    highlight: "JAMP",

    desc: "Practice smart, learn better and achieve your dream admission with Nigeria's smartest JAMB prep app.",
  },

  {
    svg: (
      <svg className="illustration-container" viewBox="0 0 260 220" fill="none">
        <circle cx="130" cy="100" r="90" fill={B.bg} />

        <rect x="60" y="60" width="140" height="95" rx="14" fill={B.muted} />

        <rect x="70" y="70" width="120" height="75" rx="10" fill="#fff" />

        <path
          d="M88 105h84M88 118h54"
          stroke={B.primary}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle cx="194" cy="62" r="22" fill={B.primary} />

        <path
          d="M184 62l8 8 13-13"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    title: "Personalized",
    highlight: "Study Experience",

    desc: "Get AI-powered study plans, track your progress and focus on what matters most for your exam.",
  },

  {
    svg: (
      <svg className="illustration-container" viewBox="0 0 260 220" fill="none">
        <circle cx="130" cy="100" r="90" fill={B.bg} />

        <path
          d="M60 155l32-44 26 26 28-38 54 56H60z"
          fill={B.primary}
          opacity="0.15"
        />

        <path
          d="M60 155l32-44 26 26 28-38 54 56"
          stroke={B.primary}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <circle cx="92" cy="111" r="8" fill={B.primary} />
        <circle cx="118" cy="137" r="8" fill={B.primary} />
        <circle cx="146" cy="99" r="8" fill={B.primary} />
        <circle cx="200" cy="155" r="8" fill={B.primary} />
      </svg>
    ),

    title: "Track Your",
    highlight: "Progress",

    desc: "Monitor performance across all subjects, identify weak areas, and celebrate your improvements daily.",
  },
];

function OnboardingScreen({ navigate }) {
  const [slide, setSlide] = useState(0);
  const [key, setKey] = useState(0);

  const isLast = slide === SLIDES.length - 1;

  const goTo = (i) => {
    setSlide(i);
    setKey((k) => k + 1);
  };

  const next = () => (isLast ? navigate("signup") : goTo(slide + 1));

  return (
    <div className="page onboarding-page">
      <div className="onboarding-topbar">
        <button onClick={() => navigate("signup")} className="skip-btn">
          Skip
        </button>
      </div>

      <div className="page-body onboarding-body">
        <div key={key} className="anim-slide onboarding-illustration">
          {SLIDES[slide].svg}
        </div>

        <h2 key={key + "t"} className="anim-slide page-title onboarding-title">
          {SLIDES[slide].title}{" "}
          <span className="highlight">{SLIDES[slide].highlight}</span>
        </h2>

        <p
          key={key + "d"}
          className="anim-slide page-subtitle onboarding-subtitle"
        >
          {SLIDES[slide].desc}
        </p>

        <div className="dots-wrapper">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              className={`dot ${i === slide ? "active-dot" : ""}`}
            />
          ))}
        </div>

        <button className="btn btn-primary" onClick={next}>
          {isLast ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default function JAMPApp() {
  const [screen, setScreen] = useState("splash");

  useEffect(() => {
    if (screen === "splash") {
      const t = setTimeout(() => setScreen("onboarding"), 2500);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const navigate = (to) => setScreen(to);

  return (
    <>
      {screen === "splash" && <SplashScreen />}
      {screen === "onboarding" && <OnboardingScreen navigate={navigate} />}
    </>
  );
}
