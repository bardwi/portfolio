import React from 'react';
import Nav from 'components/nav/Nav';
import Hero from 'components/hero/Hero';
import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <Nav />
    <Hero />
  </header>
);

export default Header;
