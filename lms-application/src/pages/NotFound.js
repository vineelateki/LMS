import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>404 - Page Not Found</h2>
      <Link to="/" className="go-home-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;