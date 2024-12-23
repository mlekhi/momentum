"use client";

import React from "react";
import Link from "next/link";

const ActionSection: React.FC = () => {
  const backgroundText = [
    { text: "Learners", top: "15%", left: "20%" },
    { text: "Researchers", top: "40%", left: "85%" },
    { text: "Founders", top: "50%", left: "25%" },
    { text: "Makers", top: "70%", left: "65%" },
    { text: "Artists", top: "70%", left: "15%" },
    { text: "Creatives", top: "25%", left: "60%" },
  ];

  return (
    <div className="relative flex justify-center items-center h-[100vh] bg-[#FFF8E1] overflow-hidden">
      {backgroundText.map((item, index) => (
        <div
          key={index}
          className="absolute text-blue font-bold text-[2rem] md:text-[5rem] uppercase opacity-10"
          style={{
            top: item.top,
            left: item.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          {item.text}
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[900px] w-full px-5 text-center">
        <div className="max-w-[450px]">
          <span className="header text-3xl md:text-4xl">
            you <i className="header-italic">belong</i> here.
          </span>
          <p className="mt-5">
            <Link
              href="https://lu.ma/moment.um"
              className="bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 text-sm md:text-base"
            >
              Attend a Session
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
