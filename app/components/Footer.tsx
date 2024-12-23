"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

const Footer: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="flex flex-col items-center p-4 px-20" style={{ backgroundColor: "#FFF8E1" }}>
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div className="mb-4 md:mb-0">
            <a
              href="https://lu.ma/moment.um"
              className="text-sm hover:text-gray-500 block"
            >
              Join Us
            </a>
            <a
              href="https://buymeacoffee.com/moment.um"
              className="text-sm hover:text-gray-600 block"
            >
              Contribute
            </a>
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="https://instagram.com/momentum_uwo" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-black hover:bg-gray-300">
                  <FontAwesomeIcon icon={faInstagram} className="md:text-xl text-white" />
                </div>
              </a>
              <a href="https://x.com/momentum_place" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-black hover:bg-gray-300">
                  <FontAwesomeIcon icon={faTwitter} className="md:text-xl text-white" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/momentum-uwo" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-black hover:bg-gray-300">
                  <FontAwesomeIcon icon={faLinkedinIn} className="md:text-xl text-white" />
                </div>
              </a>
              <a href="https://open.spotify.com/playlist/5OS7YjERKsIF9R2oUBWhyW" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-black hover:bg-gray-300">
                  <FontAwesomeIcon icon={faSpotify} className="md:text-xl text-white" />
                </div>
              </a>
            </div>
            <div className="pt-2 flex justify-center">
              <p className="text-sm mb-2">
                Made by{" "}
                <a href="https://github.com/mlekhi" className="hover:text-gray-500 font-black">
                  Maya
                </a>{" "}
                with 💙
              </p>
            </div>
          </div>
        </div>
        <a href="/" className="mt-4 self-start">
          <h1 className="text-4xl md:text-8xl font-normal">momentum</h1>
        </a>
      </div>
    </>
  );
};

export default Footer;
