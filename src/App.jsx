import { Routes, Route } from "react-router-dom";

import AppProvider from "./context/AppContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Favorites from "./pages/Favorites";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

import "./index.css";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </AppProvider>
  );
}

export default App;
