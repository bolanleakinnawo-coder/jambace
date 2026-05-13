import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return <div>{showSplash ? <SplashScreen /> : <Onboarding />}</div>;
};

export default App;
