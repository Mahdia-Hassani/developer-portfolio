import { useState } from "react";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <p className="section-label">// About Me</p>

        <h2 className="section-title">I build frontend experiences wit</h2>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-left">
            <p className="about-bio">
              I’m a frontend developer focused on React and modern UI systems. I
              enjoy building structured interfaces that feel simple and
              intuitive.
            </p>

            {showMore && (
              <p className="about-bio">
                I started with HTML and CSS, then moved to JavaScript and React.
                Every project helped me understand real-world UI structure and
                component design. I prefer building reusable components and
                clean layouts over complex code.
              </p>
            )}

            <button
              className="about-toggle"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Read more"}
            </button>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <div className="about-card highlight">
              <FaRocket />
              <div>
                <h3>Career Goal</h3>
                <p>
                  Become a strong frontend developer working on real products.
                </p>
              </div>
            </div>

            <div className="about-card highlight">
              <FaCode />
              <div>
                <h3>Learning Path</h3>
                <p>HTML → CSS → JavaScript → React</p>
              </div>
            </div>

            <div className="about-card highlight">
              <FaLightbulb />
              <div>
                <h3>Mindset</h3>
                <p>Learn by building, improve through practice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
