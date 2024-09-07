import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h3 style={{ cursor: "pointer", color: "darkorange" }}>{blog?.title}</h3>
      <p>{blog?.description}</p>
    </div>
  );
};

export default Blog;
