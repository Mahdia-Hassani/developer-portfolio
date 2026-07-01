import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import projects from "../data/Projects";
import ProjectCard from "../components/ui/ProjectCard";

function Favorites() {
  const { favorites } = useContext(AppContext);

  const favoriteProjects = projects.filter((p) => favorites.includes(p.id));

  return (
    <div className="favorites-page">
      <h2>My Favorite Projects ⭐</h2>

      {favoriteProjects.length === 0 ? (
        <p>No favorite projects yet.</p>
      ) : (
        <div className="favorites-grid">
          {favoriteProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
