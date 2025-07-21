import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__copy">
        © {new Date().getFullYear()} Bidangshree Brahma. All Rights Reserved.
      </p>
      <a href="#hero" className="footer__back-to-top" aria-label="Back to top">
        <FaArrowUp />
      </a>
    </div>
  </footer>
);

export default Footer;
