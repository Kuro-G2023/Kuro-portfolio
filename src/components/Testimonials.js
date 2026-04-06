import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>What People Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card"><i className="fas fa-star" style={{ color: "gold" }}></i><p>"Kuro's Agro Market app revolutionized our farm cooperative. Professional and timely."</p><h4>— Emmanuel N., Farmer</h4></div>
          <div className="testimonial-card"><i className="fas fa-star" style={{ color: "gold" }}></i><p>"Incredible full-stack skills; delivered the ordering system with seamless API integration."</p><h4>— Grace U., Startup Founder</h4></div>
          <div className="testimonial-card"><i className="fas fa-star" style={{ color: "gold" }}></i><p>"Highly analytical and great problem solver. A true asset to any tech team."</p><h4>— James M., RISA Mentor</h4></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;