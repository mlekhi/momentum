import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-20 py-5">
      <div className="text-lg">
        <a href="/"><h1>momentum</h1></a>
      </div>

      <button
        onClick={toggleMenu}
        className="block md:hidden text-gray-700 focus:outline-none"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-gray-700"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </div>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:space-x-4 md:bg-transparent md:shadow-none text-sm`}
      >
        <a
          href="https://lu.ma/moment.um"
          className="block px-4 py-2 md:p-0 hover:text-gray-300"
        >
          Attend
        </a>
        <a
          href="/contribute"
          className="block px-4 py-2 md:p-0 hover:text-gray-300"
        >
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Menu;
