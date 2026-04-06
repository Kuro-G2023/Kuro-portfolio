import React from "react";
import cvFile from "../assets/Kuro_CV.pdf";   // adjust name if needed (e.g., Kuro_cv.pdf)

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Kuro_Gatare_CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>Hello, I'm <span className="highlight">Kuro Gatare</span><br />Business ICT Graduate & Full-Stack Developer</h1>
        <p>Crafting cross-platform mobile & web solutions, database systems, and digital transformation. Graduating 2026, ready to innovate.</p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">View Projects <i className="fas fa-arrow-right"></i></a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
          <button className="btn btn-outline" onClick={downloadCV}><i className="fas fa-download"></i> Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;