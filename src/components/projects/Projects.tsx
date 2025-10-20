import React from 'react';
import ingala from '../../assets/ingala.png';
import './Projects.scss';

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    title: 'Ingala Earth',
    description:
      'Ingala Earth is a regenerative design and permaculture consultancy rooted in ecological harmony, cultural wisdom, and systems thinking. We work across borders to design living systems that restore land, empower communities, and cultivate resilient futures.',
    image: ingala,
    url: 'https://www.ingala.earth',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="projects">
    <div className="projects__container">
      <h2 className="projects__title">
        My <span className="projects__accent">Portfolio</span>
      </h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card"
          >
            <div className="projects__image-wrapper">
              <img src={p.image} alt={p.title} className="projects__image" />
            </div>
            <div className="projects__content">
              <h3 className="projects__card-title">{p.title}</h3>
              <p className="projects__card-desc">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
