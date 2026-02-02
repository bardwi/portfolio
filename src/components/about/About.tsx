import React from 'react';
import './About.scss';

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="about__inner container">
      <h2 className="about__title">
        About <span className="about__accent">Me</span>
      </h2>
      <p className="about__text">
        I’m a Frontend Developer with a product mindset, experienced in building
        user-centric web applications in complex, real-world environments. I
        focus on maintainable frontend architecture, performance optimization,
        and accessibility, while always keeping business goals and end users in
        mind. Beyond coding, I enjoy structuring workflows, improving processes,
        and bridging the gap between technical and non-technical teams.
      </p>
    </div>
  </section>
);

export default About;
