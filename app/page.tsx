"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/HowSection";
import WhatSection from "./components/WhatSection";
import CalltoActionSection from "./components/CalltoActionSection";
import ScrollableBanner from "./components/ScrollableBanner";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
        <Image
          src={isMobile ? "/banner2.png" : "/banner.png"}
          alt="Banner"
          width={1920}
          height={600}
          priority
        />
      </div>
      <CalltoActionSection />
      <Footer />
    </div>
  );
};

export default App;
