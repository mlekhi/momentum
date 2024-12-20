import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/HowSection";
import WhatSection from "./components/WhatSection";
import CalltoActionSection from "./components/CalltoActionSection";
import ScrollableBanner from "./components/ScrollableBanner";
import { useState, useEffect } from "react";

function App() {

  return (
    <div className="App">
      <HeroSection />
      <WhatSection />
      <ScrollableBanner />
      <CommunitySection />
      <div style={{ backgroundColor: "#FFF8E1" }}>
      <img src="banner.png"/>
      </div>
      <CalltoActionSection/>
      <Footer />
    </div>
  );
}

export default App;
