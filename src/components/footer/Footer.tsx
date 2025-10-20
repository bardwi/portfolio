import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section footer__section--left">
        <p className="footer__copy">
          © {new Date().getFullYear()} Bidangshree Brahma. All Rights Reserved.
        </p>
      </div>

      <div className="footer__section footer__section--center">
        <a href="/imprint" className="footer__link">
          Imprint
        </a>
        <span className="footer__separator">|</span>
        <a href="/privacy" className="footer__link">
          Privacy Policy
        </a>
      </div>

      <div className="footer__section footer__section--right">
        <a
          href="#hero"
          className="footer__back-to-top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
