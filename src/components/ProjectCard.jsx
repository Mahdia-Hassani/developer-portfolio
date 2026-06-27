import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaWindowMaximize,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

function ProjectCard({ project }) {
  if (!project) return null;

  const techIcons = {
    HTML: <FaHtml5 color="#e34c26" />,
    CSS: <FaCss3Alt color="#2965f1" />,
    JavaScript: <FaJs color="#f7df1e" />,
    React: <FaReact color="#61DBFB" />,
    Python: <FaPython color="#3776AB" />,
    MySQL: <SiMysql color="#4479A1" />,
    Tkinter: <FaWindowMaximize color="#6c757d" />,
  };

  return (
    <div className="project-card">
      {/* IMAGE */}
      <img src={project.image} alt={project.name} className="project-img" />

      {/* FEATURED */}
      {project.featured && <span className="featured-badge">Featured</span>}

      {/* TITLE */}
      <h3>{project.name}</h3>

      {/* DESCRIPTION */}
      <p>{project.description}</p>

      {/* TECH STACK */}
      <div className="tech-stack">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">
            {techIcons[tech] || tech}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>

        <a href={project.live} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
