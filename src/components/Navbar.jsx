import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

function Navbar({ onToggleTheme, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-logo">
        <img
          src="/images/logo-white.png"
          alt="logo"
          className="navbar-logo-img"
        />
        <span>Mahdia.dev</span>
      </div>

      {/* MOBILE BUTTON */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      {/* LINKS */}
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        {navLinks.map((item) => (
          <li key={item.title}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* ACTIONS */}
      <div className="navbar-actions">
        <ThemeToggle onToggle={onToggleTheme} darkMode={darkMode} />

        <a href="#CV" className="navbar-btn">
          CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
