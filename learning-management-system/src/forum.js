import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const navigate = useNavigate(); 

  // ✅ Load posts from local storage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("forumPosts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  // ✅ Handle new post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === "") return;

    if (newPost.length > 200) {
      alert("Post should be 200 characters max!");
      return;
    }

    const newEntry = {
      id: posts.length + 1,
      user: "You", // ✅ Always use "You" instead of random names
      content: newPost,
      timestamp: new Date().toLocaleString(),
    };

    const updatedPosts = [...posts, newEntry];
    setPosts(updatedPosts);
    localStorage.setItem("forumPosts", JSON.stringify(updatedPosts)); // ✅ Save posts
    setNewPost("");
  };

  // ✅ Handle post deletion
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("forumPosts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="forum-container">
      <h2>Discussion Forum</h2>
      <p>Engage in discussions with fellow learners!</p>

      {/* Post List */}
      <div className="post-list">
        {posts.length === 0 ? (
          <p className="no-posts">No discussions yet. Start the conversation!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post">
              <strong>{post.user}:</strong> <span>{post.content}</span>
              <br />
              <small className="timestamp">{post.timestamp}</small>
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>❌ Delete</button>
            </div>
          ))
        )}
      </div>

      {/* New Post Form */}
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your question or discussion topic..."
          maxLength={200} // ✅ Limit input length
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* ✅ Go Back Button */}
      <button className="go-back-btn" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default Forum;