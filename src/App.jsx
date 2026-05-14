import { Routes, Route } from "react-router-dom";

import SplashScreen from "../pages/SplashScreen";
import OnboardingScreen from "../pages/OnboardingScreen";
import SignUpScreen from "../pages/SignUpScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route path="/onboarding" element={<OnboardingScreen />} />

      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
}

export default App;
