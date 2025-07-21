import React from 'react';
import './Experience.scss';

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

const jobs: Job[] = [
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

const Experience: React.FC = () => (
  <section id="experience" className="experience">
    <div className="experience__container">
      <h2 className="experience__title">
        My <span className="experience__accent">Experience</span>
      </h2>

      <div className="experience__jobs">
        {jobs.map((job) => (
          <div className="experience__job" key={job.period + job.company}>
            <div className="experience__timeline">
              <p className="experience__period">{job.period}</p>
              <p className="experience__location">{job.location}</p>
            </div>
            <div className="experience__details">
              <h3 className="experience__role">
                {job.role} – {job.company}
              </h3>
              <ul className="experience__bullets">
                {job.bullets.map((b, i) => (
                  <li className="experience__bullet" key={i}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <a
        href="/resume_Bidangshree.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="experience__resume-link"
      >
        View Full Resume
      </a>
    </div>
  </section>
);

export default Experience;
