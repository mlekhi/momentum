import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/HowSection";
import WhatSection from "./components/WhatSection";
import CalltoActionSection from "./components/CalltoActionSection";
import ScrollableBanner from "./components/ScrollableBanner";
import { useState, useEffect } from "react";

function App() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <WhatSection />
      <ScrollableBanner />
      <CommunitySection />
      <div style={{ backgroundColor: "#FFF8E1" }}>
      <img src={isMobile ? "banner2.png" : "banner.png"} alt="Banner" />
      </div>
      <CalltoActionSection/>
      <Footer />
    </div>
  );
}

export default App;
