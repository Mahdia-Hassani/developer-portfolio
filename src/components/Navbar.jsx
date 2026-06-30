import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

function Navbar({ onToggleTheme, darkMode }) {
  const [open, setOpen] = useState(false);

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
        <ThemeToggle onToggle={onToggleTheme} darkMode={darkMode} />

        <a href="#contact" className="navbar-btn">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
