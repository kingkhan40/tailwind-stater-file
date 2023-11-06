import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="text-center bg-gray-100 py-12">
       <div className="flex flex-wrap justify-center space-x-6 mb-8">
        <a href="#" className="text-indigo-600 hover:text-indigo-800">
          <FaFacebook />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">
          <FaInstagram />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">
          <FaGithub />
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">
          <FaYoutube />
        </a>
      </div>
     

      <p className="text-gray-500 text-sm">© 2023 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
