"use client";
import React from "react";
import Menu from "./Menu";
import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";

const HeroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #FFFBEE, #FFF8E1, #E1F3FF)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StarsBackground className="z-0" />
      <ShootingStars
        className="z-0"
        starWidth={4}
        starHeight={4}
      />

      <Menu />
      <div className="relative flex flex-col justify-center items-center h-screen space-y-6 md:space-y-4 z-20">
        <h1 className="font-normal text-4xl md:text-7xl font-bold text-center">momentum</h1>
        <p className="text-sm md:text-lg text-center">
          come create with us.{" "}
          <a href="https://lu.ma/moment.um" className="underline">
            sundays at noon.
          </a>
        </p>
      </div>

      <img
        src="/decals/decal1.png"
        className="w-16 h-16 md:w-32 md:h-32 absolute top-[80px] right-[100px] z-20"
      />
      <img
        src="/decals/decal2.png"
        className="w-16 h-16 md:w-32 md:h-32 absolute top-[200px] left-[80px] z-20"
      />
      <img
        src="/decals/decal3.png"
        className="w-16 h-16 md:w-32 md:h-32 absolute bottom-[180px] right-[200px] z-20"
      />
      {/* <img
        src="/decals/decal4.png"
        className="w-16 h-16 md:w-32 md:h-32 absolute bottom-[40px] md:bottom-[20px] left-[100px] md:left-[300px] z-20"
      /> */}
    </div>
  );
};

export default HeroSection;
