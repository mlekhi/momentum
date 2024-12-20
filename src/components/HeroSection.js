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
      <StarsBackground className="z-0"/>
      <ShootingStars
          className="z-0"
          // maxDelay={1000}
          starWidth={4}
          starHeight={4}
          // minSpeed={1}
          // maxSpeed={2}
        />

      <Menu />
      <div className="relative flex flex-col justify-center items-center h-screen space-y-4 z-20">
        <h1 className="text-7xl font-bold">momentum</h1>
        <p className="text-l">
          come create with us.{" "}
          <a href="https://lu.ma/moment.um" className="underline">
            sundays at noon.
          </a>
        </p>
      </div>

      <img
        src="/decals/decal1.png"
        className="w-32 h-32 absolute top-[150px] right-[200px] z-20"
      />
      <img
        src="/decals/decal2.png"
        className="w-32 h-32 absolute top-[300px] left-[200px] z-20"
      />
      <img
        src="/decals/decal3.png"
        className="w-32 h-32 absolute bottom-[220px] right-[450px] z-20"
      />
      {/* <img
        src="/decals/decal4.png"
        className="w-32 h-32 absolute bottom-[20px] left-[300px] z-20"
      /> */}
    </div>
  );
};

export default HeroSection;
