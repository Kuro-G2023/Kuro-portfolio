import React from "react";

const Skills = () => {
  return (
    <section id="skills" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>Technical & Professional Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Full-Stack Development</h3>
            <div><span className="skill-tag">Flutter</span><span className="skill-tag">React</span><span className="skill-tag">Node.js</span><span className="skill-tag">Python</span></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "90%" }}></div></div>
          </div>
          <div>
            <h3>Database Management</h3>
            <div><span className="skill-tag">SQL Server</span><span className="skill-tag">Firebase</span><span className="skill-tag">PostgreSQL</span></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "88%" }}></div></div>
          </div>
          <div>
            <h3>Data Science & AI</h3>
            <div><span className="skill-tag">Analytics</span><span className="skill-tag">ML Basics</span></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "75%" }}></div></div>
          </div>
          <div>
            <h3>Project Management</h3>
            <div><span className="skill-tag">Agile</span><span className="skill-tag">SDLC</span></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "85%" }}></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;