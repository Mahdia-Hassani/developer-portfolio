import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaWindowMaximize,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function TechBadge({ tech }) {
  const icons = {
    HTML: <FaHtml5 color="#e34c26" />,
    CSS: <FaCss3Alt color="#2965f1" />,
    JavaScript: <FaJs color="#f7df1e" />,
    React: <FaReact color="#61DBFB" />,
    Python: <FaPython color="#3776AB" />,
    MySQL: <SiMysql color="#4479A1" />,
    Tkinter: <FaWindowMaximize color="#6c757d" />,
  };

  return (
    <span className="badge tech">
      {icons[tech] || null} {tech}
    </span>
  );
}

export default TechBadge;
