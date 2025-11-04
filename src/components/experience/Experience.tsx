import React from 'react';
import './Experience.scss';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}
interface Project {
  title: string;
  client?: string;
  period: string;
  url?: string;
  bullets: string[];
}
const projects: Project[] = [
  {
    title: 'Ingala Earth Website',
    client: 'Ingala Earth (Freelance)',
    period: 'Jul 2025 – Oct 2025',
    url: 'https://www.ingala.earth',
    bullets: [
      'Built the public-facing website using Next.js, React, TypeScript, and SCSS Modules.',
      'Translated Figma layouts into reusable and accessible UI components.',
      'Implemented static generation and lazy-loading for optimized performance.',
      'Collaborated directly with the founder on content structure and brand tone.',
    ],
  },
];

const experiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'TIME for Kids',
    period: 'Jan 2023 – Dec 2024',
    location: 'Berlin, Germany',
    bullets: [
      'Built and maintained UI components for several frontend projects.',
      'Wrote unit & integration tests with Jest.',
      'Collaborated in Agile/Scrum teams with designers and product managers.',
    ],
  },
  {
    role: 'Associate Consultant',
    company: 'Capgemini',
    period: 'Aug 2021 – May 2022',
    location: 'Bangalore, India',
    bullets: [
      'Developed clinical software modules for Signant Health project.',
      'Optimized performance, fixed defects, and improved UX.',
      'Coordinated with cross-functional teams.',
    ],
  },
  {
    role: 'Associate Developer',
    company: 'KayaDev AI',
    period: 'Aug 2019 – Jun 2021',
    location: 'Bangalore, India',
    bullets: [
      'Developed and maintained responsive web applications.',
      'Improved user experience, collaborated with cross-functional teams.',
      'Contributed to mobile and dashboard interface design.',
    ],
  },
];

const ExternalLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open external link"
  >
    {children} <span aria-hidden="true">↗</span>
  </a>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="projects__card">
    <header className="projects__header">
      <h3>{project.title}</h3>
      <p className="projects__meta">
        {project.client && (
          <span className="projects__client">{project.client}</span>
        )}
        {project.client && ' · '}
        <span className="projects__period">{project.period}</span>
      </p>
    </header>

    <ul className="projects__bullets" role="list">
      {project.bullets.map((b, i) => (
        <li key={i} className="projects__bullet">
          {b}
        </li>
      ))}
    </ul>

    {project.url && (
      <ExternalLink className="projects__link" href={project.url}>
        Visit Project
      </ExternalLink>
    )}
  </article>
);

const ExperienceItem: React.FC<{ job: Experience }> = ({ job }) => (
  <article className="experience__job">
    <div className="experience__timeline" aria-label="timeline">
      <p className="experience__period">{job.period}</p>
      <p className="experience__location">{job.location}</p>
    </div>

    <div className="experience__details">
      <header>
        <h3 className="experience__role">
          {job.role}{' '}
          <span className="experience__company">– {job.company}</span>
        </h3>
      </header>

      <ul className="experience__bullets" role="list">
        {job.bullets.map((b, i) => (
          <li className="experience__bullet" key={i}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const ExperienceSection: React.FC = () => (
  <>
    <section
      //id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="">
        <h2 id="projects-title" className="projects__title">
          My<span className="projects__accent">Projects</span>
        </h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>

    <section
      id="experience"
      className="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience__container">
        <h2 id="experience-title" className="experience__title">
          My <span className="experience__accent">Experience</span>
        </h2>

        <div className="experience__jobs">
          {experiences.map((job) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} />
          ))}
        </div>

        <ExternalLink
          href="/Bidangshree_CV_EN.pdf"
          className="experience__resume-link"
        >
          View Full Resume
        </ExternalLink>
      </div>
    </section>
  </>
);

export default ExperienceSection;
