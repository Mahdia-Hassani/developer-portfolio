function TechBadge({ tech, icon }) {
  return (
    <span className="tech-badge">
      {icon && <span>{icon}</span>}
      <span>{tech}</span>
    </span>
  );
}

export default TechBadge;
