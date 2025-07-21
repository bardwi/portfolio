import React, { useState, useEffect } from 'react';
import './Nav.scss';
import logo from '../../assets/logoicon.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navEl = document.querySelector('.nav') as HTMLElement | null;
    const navHeight = navEl ? navEl.offsetHeight : 0;
    const handleScroll = () => {
      setIsSticky(window.scrollY > navHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`nav ${isSticky ? 'nav--sticky' : ''}`}>
      <div className="nav__container">
        <a href="/" className="nav__logo" onClick={handleLinkClick}>
          <img src={logo} alt="Bidangshree Brahma Logo" />
        </a>

        <button
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav__list ${menuOpen ? 'nav__list--open' : ''}`}>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleLinkClick}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
          <li className="nav__item nav__item--cta">
            <a
              href="#contact"
              className="nav__link nav__link--cta"
              onClick={handleLinkClick}
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
