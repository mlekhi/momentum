"use client";

import React from "react";
import Image from "next/image";

const ExploreCuriositySection: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center px-4"
      style={{ height: "80vh", backgroundColor: "#E1F3FF" }}
    >
      <div
        className="relative flex flex-col md:flex-row items-center justify-between"
        style={{ maxWidth: "900px", width: "100%", padding: "20px" }}
      >
        <div className="text-center md:text-left max-w-[350px] md:max-w-[450px]">
          <span>
            <span className="header text-3xl md:text-4xl">
              explore your&nbsp;
            </span>
            <i className="italic-header text-3xl md:text-4xl italic">
              curiosity.
            </i>
          </span>
          <p className="mt-4 md:mt-5 mb-4 md:mb-5 text-gray-700 text-sm md:text-base">
            we host weekly co-working sessions for you to work on your passion
            projects with likeminded people.
          </p>
          <a
            href="https://lu.ma/moment.um"
            className="bg-black text-white py-2 px-4 text-sm md:text-base rounded-full shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out inline-block"
          >
            Attend a Session
          </a>
        </div>

        <Image
          src="/compass.png"
          alt="Compass"
          width={320}
          height={320}
          className="mt-6 md:mt-0"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ExploreCuriositySection;
