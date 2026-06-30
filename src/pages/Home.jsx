import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import FeedbackWall from "../components/FeedbackWall";
import Contact from "../components/Contact";

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
