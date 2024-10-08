import React from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const stars = [
    { left: "10%", top: "30%", rotation: 15 },
    { left: "60%", top: "10%", rotation: 0 },
    { left: "0%", top: "85%", rotation: 20 },
    { left: "97%", top: "25%", rotation: 180 },
    { left: "30%", top: "53%", rotation: -30 },
    { left: "90%", top: "70%", rotation: 45 },
    { left: "50%", top: "80%", rotation: 90 },
    { left: "60%", top: "38%", rotation: -15 },
  ];

  return (
    <div className="App">
      <div
        style={{ background: "linear-gradient(to right, #273B4D, #091322)" }}
      >
        <Menu />
        <div className="relative flex flex-col justify-center items-center h-screen space-y-4">
          <h1 className="text-3xl font-bold text-white z-10">momentum</h1>
          <p className="text-white z-10">Sundays at noon</p>
          {stars.map((star, index) => (
            <img
              key={index}
              src="star.png"
              className="absolute w-12 h-16 md:w-16 md:h-20"
              alt="Star"
              style={{
                left: star.left,
                top: star.top,
                transform: `rotate(${star.rotation}deg)`,
                pointerEvents: "none", // Prevent pointer events for stars
              }}
            />
          ))}
        </div>
      </div>
      <div className="justify-center items-center p-20">
<div className="relative flex items-center" style={{ height: '50vh' }}>
          <div className="z-10">
            <h2 className="text-3xl text-black text-opacity-50">
              explore your curiosity.
            </h2>
            <p className="mt-5 mb-5">
              We host weekly co-working sessions for you to work on your passion
              projects with likeminded people.
            </p>
            <a
              href="https://lu.ma/moment.um"
              className="bg-black text-white py-1.5 px-3.5 rounded-full shadow-md hover:bg-opacity-65 transition duration-300 ease-in-out"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Attend a Session
            </a>
          </div>
          <img
            src="shootingStar.webp"
            className="absolute right-10 top-10 w-40 h-28"
          />
        </div>
        <div
          className="relative flex items-center"
          style={{ height: "50vh" }}
        >
          <div className="z-10">
            <h2 className="text-3xl text-black text-opacity-50">
              No schoolwork allowed.
            </h2>
            <p className="mt-5 mb-5">
              Momentum is a co-working community of builders, creatives,
              technologists, designers, researchers, founders, and more to dive
              into their passion projects through sessions in London.
            </p>
            <h2 className="text-3xl text-black text-opacity-50">
              Intros + two work blocks + casual open demos
            </h2>
          </div>
        </div>
        <div
          className="relative flex items-center"
          style={{ height: "50vh" }}
        >         
          <div className="z-10">
            <h2 className="text-3xl text-black text-opacity-50">
              You belong here.
            </h2>
            <p>That project you keep putting off... </p>
            <p>the idea that feels just out of reach... </p>
            <p>big or small, now’s the time.</p>
          </div>
          <img
        src="shootingStar2.webp"
        className="right-100 w-60 h-60"
      />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
