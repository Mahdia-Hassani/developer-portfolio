import { useState } from "react";

const hobbies = [
  "🎨 UI/UX Design",
  "📚 Reading tech articles",
  "💻 Play GTA",
  "🌍 Travling",
];

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <p className="section-label">// About Me</p>
        <h2 className="section-title">The human behind the code.</h2>

        <div className="about-grid">
          <div className="about-left">
            <p className="about-bio">
              I believe every developer starts with curiosity, and that's
              exactly how my story began. What started as an interest in
              technology slowly became something I genuinely enjoy doing every
              day. I'm still learning, still making mistakes, and still
              improving with every project I build. That's the part I love most
              because every challenge is a chance to become a better developer.
            </p>

            {showMore && (
              <div className="about-more">
                <p className="about-bio">
                  Programming became interesting to me because it gives me the
                  freedom to turn ideas into something real. I enjoy the process
                  of solving problems, improving my work, and learning from
                  every mistake along the way. I know I still have a lot to
                  learn, but that's one of the reasons I enjoy coding so much.
                  Every challenge teaches me something new and motivates me to
                  keep improving. I'm currently focused on front-end
                  development, working with HTML, CSS, JavaScript, and React. I
                  enjoy building projects that help me practice what I've
                  learned instead of simply reading about it.I don't believe
                  learning ever really stops, and that's what makes this field
                  exciting to me. This portfolio represents where I am today,
                  not where I'll stop. Every project here reflects something
                  I've learned, every mistake has helped me grow, and every new
                  challenge gives me another reason to keep building, improving,
                  and moving forward.
                </p>
              </div>
            )}

            <button
              className="about-toggle"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "— Show Less" : "+ Show More"}
            </button>
          </div>

          <div className="about-right">
            <p className="about-sub">Hobbies</p>
            <ul className="hobbies">
              {hobbies.map((h, index) => (
                <li key={index}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
