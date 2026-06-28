import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");

  // فیلتر کردن پروژه‌ها
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <p className="section-label">// Projects</p>
        <h2 className="section-title">Recent Projects</h2>

        {/* FILTER BUTTONS */}
        <div className="filter-bar">
          {["All", "React", "JavaScript", "HTML", "CSS", "Python"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`filter-btn ${filter === item ? "active" : ""}`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
