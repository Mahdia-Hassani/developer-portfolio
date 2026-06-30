import { Link } from "react-router-dom";
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
    <Link to={`/projects/${project.id}`} className="project-link-wrapper">
      <div className="project-card">
        {/* IMAGE */}
        <div className="project-image-wrapper">
          <img src={project.image} alt={project.name} className="project-img" />

          {project.featured && (
            <span className="featured-badge">Featured ⭐</span>
          )}
        </div>

        {/* TITLE */}
        <h3>{project.name}</h3>

        {/* DESCRIPTION */}
        <p className="project-desc">{project.description}</p>

        {/* TECH STACK */}
        <div className="tech-stack">
          {project.tech?.map((tech) => (
            <span key={tech} className="tech-badge">
              {techIcons[tech] || tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          ) : (
            <span className="disabled-link">No Code</span>
          )}

          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          ) : (
            <span className="disabled-link">No Demo</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
