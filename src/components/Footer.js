import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Momentum. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;