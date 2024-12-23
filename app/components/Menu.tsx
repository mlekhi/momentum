"use client";

import React, { useState } from "react";
import Head from "next/head";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu state:", isOpen);
  };

  return (
    <>
      <Head>
        <title>Momentum</title>
        <meta name="description" content="Momentum - Attend co-working sessions and contribute to the community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className="flex items-center justify-between px-4 lg:px-20 py-5 relative">
        <div className="text-lg">
          <a href="/">
            <h1>momentum</h1>
          </a>
        </div>

        <button onClick={toggleMenu} className="block focus:outline-none">
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </div>
        </button>

        <div
          className={`absolute px-4 lg:px-20 top-16 flex justify-end w-full left-0 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-end bg-amber-50">
            <a
              href="https://lu.ma/moment.um"
              className="block px-4 py-2 hover:text-gray-300 text-gray-700 font-bold"
            >
              Attend
            </a>
            <a
              href="https://buymeacoffee.com/moment.um"
              className="block px-4 py-2 hover:text-gray-300 text-gray-700 font-bold"
            >
              Contribute
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
