function ThemeToggle({ onToggle, darkMode }) {
  return (
    <button
      className={`theme-btn ${darkMode ? "dark" : "light"}`}
      onClick={onToggle}
      aria-label="Toggle Theme"
    >
      <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
    </button>
  );
}

export default ThemeToggle;
