import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 px-20"> {/* Added px-8 for horizontal padding */}
      <div className="flex justify-between items-center w-full">
        <div className="mt-2">
          <a href="/">
            <h1 className="text-xl">momentum</h1>
          </a>
          <a
            href="https://lu.ma/moment.um"
            className="text-sm hover:text-gray-500 block"
          >
            Join Us
          </a>
          <a
            href="/contribute"
            className="text-sm hover:text-gray-600 block"
          >
            Contribute
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/momentum_uwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/momentum-uwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
      </div>

      <p className="text-sm mb-2">
        Made by{" "}
        <a
          href="https://github.com/mlekhi"
          className="hover:text-gray-500 font-black"
        >
          Maya
        </a>{" "}
        with 💙
      </p>
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} Momentum. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
