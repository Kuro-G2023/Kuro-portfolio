import React, { useState, useEffect } from "react";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("blogComments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  const saveComments = (updated) => {
    setComments(updated);
    localStorage.setItem("blogComments", JSON.stringify(updated));
  };

  const addComment = (postId, text) => {
    if (!text.trim()) return;
    const updated = { ...comments };
    if (!updated[postId]) updated[postId] = [];
    updated[postId].push({ name: "Guest Reader", text, date: new Date() });
    saveComments(updated);
    setNewComment("");
  };

  return (
    <section id="blog" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>Tech Insights & Tutorials</h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div style={{ fontSize: "2rem" }}>{post.image}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="btn btn-outline" onClick={() => setSelectedPost(post)}>Read Full Article →</button>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="modal" style={{ display: "flex" }} onClick={() => setSelectedPost(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close-modal" onClick={() => setSelectedPost(null)}>&times;</span>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.content}</p>
              <pre style={{ background: "var(--bg-secondary)", padding: "0.8rem", borderRadius: "0.5rem", overflowX: "auto" }}>{selectedPost.codeSnippet}</pre>
              <hr style={{ margin: "1rem 0" }} />
              <h4>Comments</h4>
              <div>
                {(comments[selectedPost.id] || []).map((c, idx) => (
                  <div key={idx}><strong>{c.name}</strong>: {c.text}</div>
                ))}
                {(!comments[selectedPost.id] || comments[selectedPost.id].length === 0) && <p>No comments yet. Be the first to share your thoughts!</p>}
              </div>
              <textarea rows="2" style={{ width: "100%", marginTop: "1rem", background: "var(--bg-secondary)", border: "1px solid var(--border)", padding: "0.5rem" }} placeholder="Share your thoughts..." value={newComment} onChange={e => setNewComment(e.target.value)}></textarea>
              <button className="btn btn-primary" style={{ marginTop: "0.5rem" }} onClick={() => addComment(selectedPost.id, newComment)}>Post Comment</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;