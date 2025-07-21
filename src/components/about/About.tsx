import React from 'react';
import './About.scss';

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="about__inner container">
      <h2 className="about__title">
        About <span className="about__accent">Me</span>
      </h2>
      <p className="about__text">
        I’m a Professional Frontend Developer with a strong background in the
        Information Technology and Services industry. I specialize in building
        interactive and user-friendly interfaces, with expertise in modern
        frameworks, design systems, and performance-focused development.
      </p>
    </div>
  </section>
);

export default About;
