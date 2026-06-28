import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeedbackWall from "./components/FeedbackWall";

import "./index.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // =========================
  // TOGGLE THEME (ONLY DARK / LIGHT)
  // =========================
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme}>
      <Navbar onToggleTheme={toggleTheme} darkMode={theme === "dark"} />

      <Header welcome="Hi, I'm" />

      <Profile
        name="Mahdia Hassani"
        role="Front-end Developer"
        location="Kabul, Afghanistan"
        socials={[
          { label: "GitHub", href: "https://github.com/Mahdia-Hassani" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mahdia-hassani-91a626343/",
          },
          { label: "Twitter/X", href: "https://x.com/Mahdia010" },
        ]}
      />

      <About />
      <Skills />
      <Projects />
      <FeedbackWall />
      <Contact />

      <Footer
        socials={[
          { label: "GitHub", href: "https://github.com/Mahdia-Hassani" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mahdia-hassani-91a626343/",
          },
          { label: "Twitter/X", href: "https://x.com/Mahdia010" },
        ]}
      />
    </div>
  );
}

export default App;
