import React from "react";

// Dummy JSON data
const dummyData = [
  { message: "XYZ is making groundbreaking technology" },
  { message: "XYZ is building innovative solutions" },
  { message: "XYZ is shaping the future of AI" },
  { message: "XYZ is revolutionizing the fintech industry" },
  { message: "XYZ is solving problems with data" },
  { message: "XYZ is leading advancements in renewable energy" },
  { message: "XYZ is improving healthcare with technology" },
];

const ScrollableBanner = () => {
  const scrollingText = dummyData
    .map((item) => item.message)
    .join(" • ");

  return (
    <div className="w-full h-14 overflow-hidden bg-gray-800 flex items-center">
      <div className="scroll-container flex whitespace-nowrap">
        <div className="scroll-text text-white text-xl font-semibold">
          {scrollingText} • {scrollingText}
        </div>
      </div>
      <style>
        {`
          .scroll-container {
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            height: 100%;
          }
          .scroll-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll 15s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollableBanner;
