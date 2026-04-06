import React, { useState } from "react";

function AIRecommend() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleAI = () => {
    const text = input.toLowerCase();

    if (text.includes("ai")) {
      setResult("Build Machine Learning or Chatbot projects.");
    } else if (text.includes("web")) {
      setResult("Focus on React and full-stack development.");
    } else if (text.includes("mobile")) {
      setResult("Develop mobile apps using React Native.");
    } else {
      setResult("Combine AI + Web for high demand skills.");
    }
  };

  return (
    <section id="ai">
      <h2>AI Career Assistant</h2>

      <input
        placeholder="Type: AI, Web, Mobile"
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="btn" onClick={handleAI}>
        Get Recommendation
      </button>

      {result && <p>{result}</p>}
    </section>
  );
}

export default AIRecommend;