import React from "react";
import profile from "../assets/profile.jpg";
import cvFile from "../assets/Kuro_CV.pdf";   // adjust name if needed

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Kuro_Gatare_CV.pdf";
    link.click();
  };

  return (
    <section id="about">
      <div className="container">
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: "200px", textAlign: "center" }}>
            <img src={profile} alt="Kuro Gatare" className="profile-img" />
          </div>
          <div style={{ flex: 2 }}>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
              I studied Business Information Communication Technology and I'm about to graduate this year (2026). 
              I am capable of using my skills and knowledge acquired from the University, ALX Project Management Founder's Academy, 
              and personal research to provide technological solutions. My experience includes internships: 
              <strong> 2019 (Computer System Technology)</strong>, <strong> 2022 (Software Development)</strong>, 
              and recently <strong> 2025 at RISA</strong> developing web & mobile applications. My university research project 
              is a cross-platform Flutter mobile app — <strong>Agro Market & Advisory</strong> — helping farmers connect with buyers 
              and advisors. I'm currently enhancing it with SQL Server, JavaScript backend, Flutter & React.
            </p>
            <div className="btn-group" style={{ marginTop: "1rem" }}>
              <button onClick={downloadCV} className="btn btn-primary"><i className="fas fa-file-alt"></i> Download Full CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;