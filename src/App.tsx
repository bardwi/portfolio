import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Imprint from 'pages/Imprint/Imprint';
import Privacy from 'pages/Privacy/PrivacyPolicy';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { run as initCookieConsent } from 'vanilla-cookieconsent';
import cookieConsentConfig from 'utils/cookieConsentConfig';

import './App.scss';

const App: React.FC = () => {
  useEffect(() => {
    initCookieConsent(cookieConsentConfig);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* fallback to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
