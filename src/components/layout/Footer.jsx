import React from 'react';
import { FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      {Hi}

      <aside>
        <h4>Social Media</h4>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;