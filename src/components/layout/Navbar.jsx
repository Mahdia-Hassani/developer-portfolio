import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Favorites", path: "/favorites" },
  { title: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-logo">
        <img src="/images/logo-white.png" alt="logo" />
      </div>

      {/* MENU BUTTON */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      {/* LINKS */}
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ACTIONS */}
      <div className="navbar-actions">
        <ThemeToggle onToggle={toggleTheme} darkMode={theme === "dark"} />

        <a href="#contact" className="navbar-btn">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
