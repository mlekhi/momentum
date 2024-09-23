import React from 'react';

const Menu = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <div className="text-sm font-bold">
        <a href="/"><h1>momentum</h1></a>
      </div>
      <div className="flex space-x-4">
        <a href="https://lu.ma/moment.um" className="hover:text-gray-300 text-sm">
          Join Us
        </a>
        <a href="/contribute" className="hover:text-gray-300 text-sm">
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Menu;
