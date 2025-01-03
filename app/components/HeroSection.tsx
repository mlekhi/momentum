"use client";

import React from "react";
import Menu from "./Menu";
import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <>
      <Head>
        <title>Momentum - Co-Working Sessions</title>
        <meta
          name="description"
          content="Momentum is a co-working community in London, Ontario. Join us Sundays at noon to work on your creative projects in a supportive environment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        style={{
          background: "linear-gradient(to bottom, #FFFBEE, #FFF8E1, #E1F3FF)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <StarsBackground className="z-0" />
        <ShootingStars className="z-0" starWidth={4} starHeight={4} />

        <Menu />
        <div className="relative flex flex-col justify-center items-center h-screen space-y-6 md:space-y-4 z-20">
          <h1 className="font-normal text-4xl md:text-7xl font-bold text-center">
            momentum
          </h1>
          <p className="text-sm md:text-lg text-center">
            come create with us.{" "}
            <Link href="https://lu.ma/moment.um" className="underline">
              sundays at noon in london, ontario.
            </Link>
          </p>
        </div>

        <Image
          src="/decals/decal1.png"
          width={128} 
          height={128}
          className="absolute top-[80px] right-[100px] z-10"
          alt="Decorative decal 1"
        />
        <Image
          src="/decals/decal2.png"
          width={128} 
          height={128}
          className="absolute top-[200px] left-[80px] z-10"
          alt="Decorative decal 2"
        />
        <Image
          src="/decals/decal3.png"
          width={128}
          height={128}
          className="absolute bottom-[180px] right-[200px] z-10"
          alt="Decorative decal 3"
        />
      </div>
    </>
  );
};

export default HeroSection;
