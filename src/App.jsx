import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeedbackWall from "./components/FeedbackWall";
import NotFound from "./pages/NotFound";

import "./index.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar onToggleTheme={toggleTheme} darkMode={theme === "dark"} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header welcome="Hi, I'm" />
              <Profile />
              <About />
              <Skills />
              <Projects />

              <FeedbackWall />

              <Contact />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
