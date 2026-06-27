function Header({ welcome = "Hi, I'm" }) {
  return (
    <section id="home" className="header">
      {/* LEFT SIDE */}
      <div className="header-left">
        <p className="header-eyebrow">// Front-end Developer</p>

        <h1 className="header-name">
          {welcome} <span>Mahdia Hassani</span>
        </h1>

        <p className="header-loc"> Kabul, Afghanistan</p>

        <p className="header-quote">
          I build clean, responsive web interfaces using HTML, CSS, JAVASCRIPT,
          React, Python.
        </p>

        <div className="header-btns">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#about" className="btn btn-outline">
            About Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE (TERMINAL Box )*/}
      <div className="terminal">
        <div className="terminal-bar">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="terminal-body">
          <p>
            <span className="t-kw">const</span> developer = {"{"}
          </p>

          <p>
            &nbsp;&nbsp;<span className="t-key">name</span>:{" "}
            <span className="t-str">"Mahdia Hassani"</span>,
          </p>

          <p>
            &nbsp;&nbsp;<span className="t-key">role</span>:{" "}
            <span className="t-str">"Front-end Developer"</span>,
          </p>

          <p>
            &nbsp;&nbsp;<span className="t-key">skills</span>:{" "}
            <span className="t-str">["React", "JS", "CSS", "Python"]</span>,
          </p>

          <p>
            &nbsp;&nbsp;<span className="t-key">available</span>:{" "}
            <span className="t-kw">true</span>
          </p>

          <p>{"}"}</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
