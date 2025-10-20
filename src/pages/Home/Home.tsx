import React from 'react';

import About from 'components/about/About';
import Skills from 'components/skills/Skills';
import Experience from 'components/experience/Experience';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';

import './Home.scss';

const Home: React.FC = () => (
  <>
    <main className="home">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </>
);

export default Home;
