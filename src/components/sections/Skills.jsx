import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaPaintBrush,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt color="#2965f1" />, level: 85 },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" />, level: 80 },
  { name: "React", icon: <FaReact color="#61DBFB" />, level: 75 },
  { name: "Python", icon: <FaPython color="#3776AB" />, level: 60 },
  { name: "Git", icon: <FaGitAlt color="#f1502f" />, level: 70 },
  { name: "GitHub", icon: <FaGithub />, level: 80 },
  { name: "UI/UX", icon: <FaPaintBrush />, level: 75 },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <p className="section-label">// Skills</p>
        <h2 className="section-title">Skilled </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              {/* ICON + NAME */}
              <div className="skill-top">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>

              {/* PROGRESS BAR */}
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <small className="skill-percent">{skill.level}%</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
