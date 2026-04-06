import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "experience", "blog", "testimonials", "contact"];
      let current = "";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">KURO GATARE</div>
        <div className="nav-links">
          <a href="#home" className={`nav-link ${activeSection === "home" ? "active" : ""}`}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}>About</a>
          <a href="#projects" className={`nav-link ${activeSection === "projects" ? "active" : ""}`}>Projects</a>
          <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`}>Skills</a>
          <a href="#experience" className={`nav-link ${activeSection === "experience" ? "active" : ""}`}>Experience</a>
          <a href="#blog" className={`nav-link ${activeSection === "blog" ? "active" : ""}`}>Blog</a>
          <a href="#testimonials" className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}>Testimonials</a>
          <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active" : ""}`}>Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i> {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;