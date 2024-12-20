import React from "react";

const ExploreCuriositySection = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "80vh", backgroundColor: "#E1F3FF" }}
    >
      <div
        className="relative flex flex-col md:flex-row items-center justify-between"
        style={{ maxWidth: "900px", width: "100%", padding: "20px" }}
      >
        <div className="text-center md:text-left" style={{ maxWidth: "450px" }}>
          <span>
            <span className="header text-4xl font-bold">explore your&nbsp;</span>
            <i className="italic-header text-4xl font-bold italic">curiosity.</i>
          </span>
          <p className="mt-5 mb-5 text-gray-700">
            We host weekly co-working sessions for you to work on your passion projects with
            likeminded people.
          </p>
          <a
            href="https://lu.ma/moment.um"
            className="bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out inline-block"
          >
            Attend a Session
          </a>
        </div>

        <img
          src="compass.png"
          alt="Compass"
          className="h-80 w-80 mt-6 md:mt-0"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ExploreCuriositySection;