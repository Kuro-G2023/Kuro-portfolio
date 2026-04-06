import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>Career & Education Timeline</h2>
        <div className="timeline-grid">
          <div className="timeline-item"><h3>🎓 Bachelor's in Business ICT</h3><p>Mount Kenya University | 2023 - 2025 </p></div>
          <div className="timeline-item"><h3>📱 Mobile & Web Dev Intern</h3><p>RISA (Rwanda Information Society Authority) | 08/2025 - 10/2025</p></div>
          <div className="timeline-item"><h3>💻 Software Dev Intern</h3><p>Saltel | 03/2022 - 05/2022</p></div>
          <div className="timeline-item"><h3>🔧 Computer System Tech Intern</h3><p>Saltel | 05/2019 - 07/2019</p></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;