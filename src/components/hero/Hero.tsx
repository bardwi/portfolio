import React from 'react';
import './Hero.scss';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import profile from '../../assets/pic2.png';

const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <div className="hero__left">
      <p className="hero__intro">Hi, I am</p>
      <h1 className="hero__name">Bidangshree Brahma</h1>
      <p className="hero__role">Front-end Developer</p>
      <p className="hero__location">based in Germany</p>

      <ul className="hero__socials">
        <li className="hero__social-item">
          <a
            href="https://linkedin.com/in/bidangshree-brahma"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="hero__social-item">
          <a
            href="mailto:bardwi.brm@gmail.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </li>
        <li className="hero__social-item">
          <a
            href="https://github.com/bardwi"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
      </ul>

      <div className="hero__buttons">
        <a
          href="/resume_Bidangshree.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__button hero__button--solid"
        >
          Download CV
        </a>
        <a href="#projects" className="hero__button hero__button--outline">
          Portfolio
        </a>
      </div>
    </div>

    <div className="hero__right">
      <img src={profile} alt="Bidangshree Brahma" className="hero__image" />
    </div>
  </section>
);

export default Hero;
