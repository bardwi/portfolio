import React from 'react';
import './Imprint.scss';

const Imprint: React.FC = () => (
  <section className="imprint">
    <div className="imprint__container">
      <h1 className="imprint__title">Imprint</h1>
      <p className="imprint__text">
        Bidangshree Brahma
        <br />
        Friedrichshain
        <br />
        Berlin, Germany
        <br />
        <br />
        Email: <a href="mailto:you@domain.com">bardwi.brm(at)gmail.com</a>
        <br />
      </p>
      <h2>Responsible for content</h2>
      <p className="imprint__text">
        Bidangshree Brahma
        <br />
        Address same as above
      </p>
    </div>
  </section>
);

export default Imprint;
