import React, { useEffect } from 'react';
import Home from 'pages/Home/Home';
import { run as initCookieConsent } from 'vanilla-cookieconsent';
import cookieConsentConfig from 'utils/cookieConsentConfig';
import './App.scss';

const App: React.FC = () => {
  useEffect(() => {
    initCookieConsent(cookieConsentConfig);
  }, []);

  return <Home />;
};

export default App;
