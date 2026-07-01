import Header from "../components/layout/Header";

import Profile from "../components/sections/Profile";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import FeedbackWall from "../components/sections/FeedbackWall";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Header welcome="Hi, I'm" />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <FeedbackWall />
      <Contact />
    </>
  );
}

export default Home;
