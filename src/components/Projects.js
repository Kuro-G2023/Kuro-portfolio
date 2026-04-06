import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [interactions, setInteractions] = useState(() => {
    const saved = localStorage.getItem("projectInteractions");
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [aiRecommendation, setAiRecommendation] = useState([]);

  useEffect(() => {
    localStorage.setItem("projectInteractions", JSON.stringify(interactions));
    let maxCat = null, maxCount = 0;
    for (const [cat, count] of Object.entries(interactions)) {
      if (count > maxCount) { maxCount = count; maxCat = cat; }
    }
    if (maxCat && maxCount > 0) {
      const rec = projectsData.filter(p => p.category === maxCat).slice(0, 2);
      setAiRecommendation(rec);
    } else {
      setAiRecommendation([projectsData[0], projectsData[2]]);
    }
  }, [interactions]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    const newInteractions = { ...interactions };
    newInteractions[project.category] = (newInteractions[project.category] || 0) + 1;
    setInteractions(newInteractions);
  };

  const filteredProjects = projectsData.filter(p => filter === "all" || p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>Featured Projects</h2>
        <div className="filter-buttons">
          {["all", "mobile", "web", "backend"].map(cat => (
            <button key={cat} className={`filter-btn ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
              {cat === "all" ? "All" : cat === "mobile" ? "Mobile" : cat === "web" ? "Web / Frontend" : "Backend / API"}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(proj => (
            <div key={proj.id} className="project-card">
              <div style={{ fontSize: "2.5rem" }}>{proj.category === 'mobile' ? '📱' : (proj.category === 'web' ? '🌐' : '⚙️')}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div><span className="skill-tag">{proj.tech}</span></div>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.8rem" }}>
                <button className="btn btn-outline" onClick={() => handleViewDetails(proj)}>Details</button>
                <a href={proj.repo} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendation Widget */}
        <div className="ai-recommend">
          <h4><i className="fas fa-robot"></i> AI Skill & Project Recommendation</h4>
          <p>
            {Object.keys(interactions).length ? 
              `🤖 AI suggests: Since you like ${Object.keys(interactions).reduce((a,b)=>interactions[a]>interactions[b]?a:b)} projects, check these out:` 
              : "✨ AI recommendation: Based on your profile (AgriTech, Full-Stack), explore the Agro Market App or Farmer Ordering backend."}
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "10px" }}>
            {aiRecommendation.map(proj => (
              <span key={proj.id} className="skill-tag" style={{ cursor: "pointer" }} onClick={() => handleViewDetails(proj)}>
                🔍 {proj.title}
              </span>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" style={{ display: "flex" }} onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close-modal" onClick={() => setSelectedProject(null)}>&times;</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.longDesc || selectedProject.desc}</p>
              <p><strong>Tech stack:</strong> {selectedProject.tech}</p>
              <p><strong>Repository:</strong> <a href={selectedProject.repo} target="_blank" rel="noreferrer">{selectedProject.repo}</a></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;