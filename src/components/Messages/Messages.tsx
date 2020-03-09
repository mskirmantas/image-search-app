import React from "react";

import "./Messages.scss";

interface MessageProps {
  error: string;
}

export const LandingMessage: React.FC<MessageProps> = props => {
  return (
    <div
      className="LandingMessage"
      style={{ display: !props.error ? "" : "none" }}
    >
      <h1>Unsearch</h1>
      <h3>An image search app powered by Unsplash API</h3>
    </div>
  );
};

export const ErrorMessage: React.FC<MessageProps> = props => {
  return (
    <div
      className="ErrorMessage"
      style={{ display: props.error ? "" : "none" }}
    >
      <h2>{props.error}</h2>
    </div>
  );
};
