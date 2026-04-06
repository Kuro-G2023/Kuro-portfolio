import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback("All fields required.");
      return;
    }
    if (!form.email.includes("@")) {
      setFeedback("Valid email required.");
      return;
    }
    setFeedback("✅ Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setFeedback(""), 3000);
  };

  // Social links (update URLs as needed)
  const socialLinks = {
    github: "https://github.com/Kuro-G2023",
    linkedin: "https://www.linkedin.com/in/gatare-kuro-abb4962a3/",
    twitter: "https://twitter.com/your-handle",
    instagram: "https://instagram.com/your-handle"
  };

  const openSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>Let's Connect</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
          <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "260px" }} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              rows="4"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
            <div style={{ marginTop: "0.5rem" }}>{feedback}</div>
          </form>
          <div style={{ flex: 1 }}>
            <h3>Connect with me</h3>
            <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.8rem", marginTop: "1rem" }}>
              <button
                onClick={() => openSocial(socialLinks.github)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontSize: "inherit",
                  padding: 0
                }}
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </button>
              <button
                onClick={() => openSocial(socialLinks.linkedin)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontSize: "inherit",
                  padding: 0
                }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </button>
              <button
                onClick={() => openSocial(socialLinks.twitter)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontSize: "inherit",
                  padding: 0
                }}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                onClick={() => openSocial(socialLinks.instagram)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontSize: "inherit",
                  padding: 0
                }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
            <p>
              <i className="fas fa-envelope"></i> kurogatare@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +250 791 982 724
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;