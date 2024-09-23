import React from 'react';

const Menu = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <div className="text-sm font-bold">
        Momentum
      </div>
      <div className="flex space-x-4">
        <a href="/calendar" className="hover:text-gray-300 text-sm">
          Calendar
        </a>
        <a href="/contribute" className="hover:text-gray-300 text-sm">
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Menu;
