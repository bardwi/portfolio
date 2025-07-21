import React from 'react';
import Nav from '../nav/Nav';
import Hero from '../hero/Hero';
import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <Nav />
    <Hero />
  </header>
);

export default Header;
