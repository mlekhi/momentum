import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex flex-col items-center p-4'>
    <div className="flex">      
      <div className="flex space-x-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
      </div>

      <div className="mt-2">
        <a href="/"><h1>momentum</h1></a>
        <a href="https://lu.ma/moment.um" className="text-sm text-blue-500 hover:text-blue-600">
          Join Us
        </a>
        <a href="/contribute" className="text-sm text-blue-500 hover:text-blue-600">
          Contribute
        </a>
      </div>
      </div>

      <p className="text-sm mb-2">
        Made by{' '}
        <a 
          href="https://github.com/mlekhi" 
          className="text-blue-500 hover:text-gray-500 font-black"
        >
          Maya
        </a>
        {' '}with 💙 
      </p>
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} Momentum. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
