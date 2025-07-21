import React from 'react';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './Home.scss';

const Home: React.FC = () => (
  <>
    <Header />
    <main className="home">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
