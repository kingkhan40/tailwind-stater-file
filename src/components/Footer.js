import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="text-center bg-gray-200 py-12">
       <div className="flex flex-wrap justify-center space-x-6 mb-8">
        <a href="#" className="text-indigo-500 hover:text-indigo-800">
          <FaFacebook size={25}/>
        </a>
        <a href="#" className="text-indigo-500 hover:text-indigo-800">
          <FaInstagram size={25}/>
        </a>
        <a href="#" className="text-indigo-500 hover:text-indigo-800">
          <FaGithub size={25}/>
        </a>
        <a href="#" className="text-indigo-500 hover:text-indigo-800">
          <FaYoutube size={25}/>
        </a>
      </div>
     

      <p className="text-gray-500 text-sm">© 2023 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
