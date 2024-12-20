import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faSpotify } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 px-20" style={{ backgroundColor: "#FFF8E1"}}>
      <div className="flex justify-between items-start w-full flex-start">
        <div>
          <a
            href="https://lu.ma/moment.um"
            className="text-sm hover:text-gray-500 block"
          >
            Join Us
          </a>
          <a href="/contribute" className="text-sm hover:text-gray-600 block">
            Contribute
          </a>
          <a href="/">
            <h1 className="text-8xl">momentum</h1>
          </a>
        </div>
        <div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/momentum_uwo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-300">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/momentum-uwo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-300">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-white" />
              </div>
            </a>
            <a
              href="https://open.spotify.com/playlist/5OS7YjERKsIF9R2oUBWhyW?si=b4eb060f29e0489a&pt=e84b2debec104d5e339f5dfb9609bc17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-300">
              <FontAwesomeIcon icon={faSpotify} className="text-2xl text-white" />
            </div>
            </a>
          </div>
          <div className="pt-2 flex justify-center">
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
            </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
