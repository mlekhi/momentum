import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const stars = [
    { left: '10%', top: '30%', rotation: 15 },
    { left: '60%', top: '10%', rotation: 0 },
    { left: '0%', top: '85%', rotation: 0 },
    { left: '98%', top: '25%', rotation: 0 },
    { left: '30%', top: '53%', rotation: -30 },
    { left: '90%', top: '70%', rotation: 45 },
    { left: '50%', top: '80%', rotation: 90 },
    { left: '60%', top: '40%', rotation: -15 },
  ];

  return (
    <div className="App">
      <div style={{ background: 'linear-gradient(to right, #273B4D, #091322)' }}>
        <Menu />
        <div className="relative flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-white z-10">momentum</h1>
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
                pointerEvents: 'none', // Prevent pointer events for stars
              }}
            />
          ))}
        </div>
      </div>
      <div className="justify-center items-center p-20">
        <p>
          Momentum is a co-working community bringing together Western University’s builders,
          creatives, technologists, designers, researchers, budding founders, and more to work on
          their passion projects. Our goal is to foster a space that for people to connect over
          their interests, work together, and remain accountable & dedicated to work they care
          about.
        </p>
        <h2 className="text-3xl font-bold">no schoolwork allowed</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
