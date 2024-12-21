import React, { useState } from "react";

const Popup = ({ message }) => {
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
          className="absolute left-0 bg-black text-white text-sm p-4 rounded-md shadow-md"
          style={{
            top: "30px",
            zIndex: 50,
            width: "300px",
          }}
        >
          {message}
        </div>
      )}
    </span>
  );
};

const HowSection = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "60vh", backgroundColor: "#FFF8E1" }}
    >
      <div
        className="relative flex justify-end"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <img
          src="socraticaStars.png"
          alt="Socratica"
          className="absolute right-[40%] top-[-60%]"
        />

        <div className="text-right md:text-left pr-7 w-[300px] md:text-xl text-lg ">
          <h2 className="header text-3xl md:text-4xl">how it works...</h2>
          <p className="mt-5 mb-5 text-gray-700">
            50 minutes of <Popup message="*NO school or job work is allowed! There are other co-working spaces that exist for studying, working, etc. This space is not one of them. We do this to encourage our members to show up for themselves and pursue what they don’t make time for." /> time.
          </p>
          <p className="mt-5 mb-5 text-gray-700">10 minute break.</p>
          <p className="mt-5 mb-5 text-gray-700">
            50 minutes of <Popup message="*NO school or job work is allowed! There are other co-working spaces that exist for studying, working, etc. This space is not one of them. We do this to encourage our members to show up for themselves and pursue what they don’t make time for." /> time.
          </p>
          <p className="mt-5 mb-5 text-gray-700">Demos to wrap up!</p>
        </div>
      </div>
    </div>
  );
};

export default HowSection;


