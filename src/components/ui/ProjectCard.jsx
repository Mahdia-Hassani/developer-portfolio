import TechBadge from "../ui/TechBadge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FaStar, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { favorites, toggleFavorite } = useContext(AppContext);

  const isFav = favorites.includes(project.id);

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-img" />

        <div className="project-badges">
          {project.featured && (
            <span className="badge featured">Featured ⭐</span>
          )}

          <button
            onClick={() => toggleFavorite(project.id)}
            className={`badge fav ${isFav ? "active" : ""}`}
            aria-label="favorite"
          >
            <FaStar />
          </button>
        </div>
      </div>

      <h3>{project.name}</h3>

      <p className="project-desc">{project.description}</p>

      <div className="tech-stack">
        {project.tech?.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      <div className="project-links">
        <Link to={`/projects/${project.id}`}>View Details</Link>

        <a href={project.github} target="_blank" rel="noreferrer">
          <FaGithub /> Code
        </a>

        <a href={project.live} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
