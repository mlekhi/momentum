import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between pl-20 pr-20 pt-5">
      <div className="text-sm font-bold">
        <a href="/"><h1>momentum</h1></a>
      </div>
      <button
        onClick={toggleMenu}
        className="block md:hidden text-sm font-bold focus:outline-none"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:space-x-4 text-sm`}
      >
        <a href="https://lu.ma/moment.um" className="hover:text-gray-300">
          Attend
        </a>
        <a href="/contribute" className="hover:text-gray-300">
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Menu;
