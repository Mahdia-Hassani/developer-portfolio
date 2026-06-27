import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./index.css";
import "./App.css";

const quotes = [
  "Build things that matter.",
  "Code is craft.",
  "One commit at a time.",
  "Make it work, then make it beautiful.",
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [quote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("light");
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar onToggleTheme={toggleTheme} darkMode={darkMode} />

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
