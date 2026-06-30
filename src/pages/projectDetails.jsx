import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>

      <img src={project.image} alt={project.name} />

      <p>{project.description}</p>

      <div>
        <a href={project.github} target="_blank">
          GitHub
        </a>

        <a href={project.live} target="_blank">
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
