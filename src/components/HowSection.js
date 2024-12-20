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
      style={{ height: "80vh", backgroundColor: "#FFF8E1" }}
    >
      <div
        className="relative flex justify-end"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <img
          src="socraticaStars.png"
          alt="Socratica"
          style={{ position: "absolute", right: "40%", top: "-90%" }}
        />

        <div className="text-right md:text-left" style={{ width: "300px" }}>
          <p className="mt-5 mb-5 text-gray-700 text-xl font-bold">
            50 minutes of <Popup message="*NO school or job work is allowed! There are other co-working spaces that exist for studying, working, etc. This space is not one of them. We do this to encourage our members to show up for themselves and pursue what they don’t make time for." /> time.
          </p>
          <p className="mt-5 mb-5 text-gray-700 text-xl font-bold">10 minute break.</p>
          <p className="mt-5 mb-5 text-gray-700 text-xl font-bold">
            50 minutes of <Popup message="*NO school or job work is allowed! There are other co-working spaces that exist for studying, working, etc. This space is not one of them. We do this to encourage our members to show up for themselves and pursue what they don’t make time for." /> time.
          </p>
          <p className="mt-5 mb-5 text-gray-700 text-xl font-bold">Demos to wrap up</p>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
