"use client";

import React, { useState } from "react";
import Head from "next/head";

interface PopupProps {
  message: string;
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="underline cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      work*
      {hovered && (
        <div
          className="absolute left-0 bg-black text-white text-xs p-4 rounded-md shadow-md w-24 md:w-96"
          style={{
            top: "30px",
            zIndex: 50,
          }}
          role="tooltip"
        >
          {message}
        </div>
      )}
    </span>
  );
};

const HowSection: React.FC = () => {
  return (
    <>
      <Head>
        <title>How It Works - Momentum</title>
        <meta
          name="description"
          content="Learn how Momentum's co-working sessions work: 50-minute focus sessions, 10-minute breaks, and demos to wrap up."
        />
      </Head>
      <div
        className="flex items-center justify-center"
        style={{ height: "60vh", backgroundColor: "#FFF8E1" }}
      >
        <div
          className="relative flex justify-end"
          style={{ maxWidth: "900px", width: "100%" }}
        >
          <img
            src="/socraticaStars.png"
            alt="Socratica"
            className="absolute right-[40%] top-[-60%]"
          />

          <div className="text-right md:text-left pr-7 w-[300px] md:text-xl text-lg">
            <h2 className="header text-3xl md:text-4xl">how it works...</h2>
            <p className="mt-5 mb-5 text-gray-700">
              50 minutes of{" "}
              <Popup message="*NO school or job work is allowed! This space is designed to encourage members to show up for themselves and pursue what they don’t make time for." />{" "}
              time.
            </p>
            <p className="mt-5 mb-5 text-gray-700">10 minute break.</p>
            <p className="mt-5 mb-5 text-gray-700">
              50 minutes of{" "}
              <Popup message="*NO school or job work is allowed! This space is designed to encourage members to show up for themselves and pursue what they don’t make time for." />{" "}
              time.
            </p>
            <p className="mt-5 mb-5 text-gray-700">Demos to wrap up!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowSection;
