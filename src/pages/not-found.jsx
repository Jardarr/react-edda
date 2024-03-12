import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page not found";
  }, []);
  return (
    <div className="not-found">
      <span className="not-found_text hero_background">
        <h1>404</h1>
        <h2>Page not found</h2>
      </span>
    </div>
  )
};

export default NotFound;