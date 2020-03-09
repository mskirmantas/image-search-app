import React from "react";

import "./Logo.scss";

export const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <a href="/" style={{ textDecoration: "none" }}>
        <h1>Unsearch</h1>
      </a>
    </div>
  );
};
