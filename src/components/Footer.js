import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white flex flex-col items-center">
      <p className="text-sm mb-2">
        Made with 🤍 by Maya
      </p>
      <p className="text-sm">
        © {new Date().getFullYear()} Momentum. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;