import React from "react";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

interface TopBarProps {
  input: string;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  onSubmit: () => void;
}

export const TopBar: React.FC<TopBarProps> = props => {
  return (
    <div className="TopBar">
      <div className="container">
        <div className="logo">
          <a href="/" style={{ textDecoration: "none" }}>
            <h1>Unsearch</h1>
          </a>
        </div>
        <div className="search-bar">
          <div className="search-field">
            <Icon className="search-field-icon">search</Icon>
            <input
              type="text"
              placeholder="Search free high-resolution images"
              value={props.input}
              onChange={props.onChange}
            />
            {props.input ? (
              <Icon
                className="search-field-icon clear-icon"
                onClick={props.onClearSearch}
              >
                close
              </Icon>
            ) : null}
          </div>
          <div className="search-button">
            {props.isLoading ? (
              <CircularProgress
                className="loading-icon"
                style={{ color: "#1a1a1a", padding: "3px" }}
              />
            ) : (
              <Button
                style={{ backgroundColor: "#1a1a1a" }}
                variant="contained"
                color="primary"
                type="submit"
                onClick={props.onSubmit}
              >
                Search
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
