import React from "react";
import Menu from "./Menu";

const HeroSection = () => {
  return (
    <div
       style={{
        background: "linear-gradient(to bottom, #FFFBEE, #FFF8E1, #E1F3FF)",
      }}
>
    <Menu />
    <div
      className="relative flex flex-col justify-center items-center h-screen space-y-4"
    >
      <h1 className="text-7xl font-bold">momentum</h1>
      <p>come create with us. <a href="https://lu.ma/moment.um" className="underline">sundays at noon. </a></p>
    </div>
    </div>
  );
};

export default HeroSection;
