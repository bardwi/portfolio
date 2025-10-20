import React from 'react';
import './Skills.scss';
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGit,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiBootstrap,
  SiTypescript,
  SiFigma,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
} from 'react-icons/si';

type Skill = {
  icon: React.ReactNode;
  label: string;
};

const skills: Skill[] = [
  { icon: <FaHtml5 color="#E34F26" />, label: 'HTML' },
  { icon: <FaCss3 color="#1572B6" />, label: 'CSS' },
  { icon: <FaSass color="#CC6699" />, label: 'SASS' },
  { icon: <SiJavascript color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <FaReact color="#61DAFB" />, label: 'React' },
  { icon: <SiNextdotjs color="#000000" />, label: 'Next.js' },
  { icon: <SiBootstrap color="#7952B3" />, label: 'Bootstrap' },
  { icon: <SiTypescript color="#3178C6" />, label: 'TypeScript' },
  { icon: <SiFigma color="#F24E1E" />, label: 'Figma' },
  { icon: <FaNodeJs color="#339933" />, label: 'Node.js' },
  { icon: <SiMysql color="#4479A1" />, label: 'MySQL' },
  { icon: <SiMongodb color="#47A248" />, label: 'MongoDB' },
  { icon: <FaGit color="#F05032" />, label: 'Git' },
];

const Skills: React.FC = () => (
  <section id="skills" className="skills">
    <div className="skills__container">
      <h2 className="skills__title">
        My <span className="skills__accent">Skills</span>
      </h2>
      <div className="skills__grid">
        {skills.map(({ icon, label }) => (
          <div className="skills__item" key={label}>
            <div className="skills__icon">{icon}</div>
            <p className="skills__label">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
