import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const index = projects.findIndex((p) => p.id === Number(id));
  const project = projects[index];

  if (!project) return <h2>Project not found</h2>;

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <section className="project-details">
      <div className="project-details-inner">
        {/* TITLE */}
        <h1>{project.name}</h1>

        {/* IMAGE */}
        <img src={project.image} alt={project.name} />

        {/* OVERVIEW */}
        <p className="overview">{project.overview}</p>

        {/* META */}
        <div className="meta">
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
        </div>

        {/* FEATURES */}
        <h3>Features</h3>
        <ul>
          {project.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* CHALLENGES */}
        <h3>Challenges</h3>
        <ul>
          {project.challenges?.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        {/* WHAT I LEARNED */}
        <h3>What I Learned</h3>
        <p>{project.lessons}</p>

        {/* ⭐ PROGRESS BAR */}
        <div className="progress-container">
          <p>Project Progress</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  project.status === "Completed"
                    ? "100%"
                    : project.status === "In Progress"
                      ? "60%"
                      : "30%",
              }}
            />
          </div>
        </div>

        {/* LINKS */}
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          )}

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="project-nav">
          {prev ? (
            <Link to={`/projects/${prev.id}`}>← Previous</Link>
          ) : (
            <span />
          )}

          <Link to="/projects">Back</Link>

          {next ? <Link to={`/projects/${next.id}`}>Next →</Link> : <span />}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
