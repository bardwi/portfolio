import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/logoicon.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.scss';

const Nav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const navEl = document.querySelector('.nav') as HTMLElement | null;
    const navHeight = navEl?.offsetHeight || 0;
    const onScroll = () => setIsSticky(window.scrollY > navHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${isSticky ? 'nav--sticky' : ''}`}>
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="Logo" />
        </Link>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav__list ${menuOpen ? 'nav__list--open' : ''}`}>
          <li className="nav__item">
            <Link to="/#about" className="nav__link" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#skills" className="nav__link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#projects" className="nav__link" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav__item nav__item--cta">
            <Link
              to="/#contact"
              className="nav__link nav__link--cta"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
