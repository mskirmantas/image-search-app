import React from "react";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

interface TopBarProps {
  input: string;
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
          <Button
            style={{ margin: "auto 5px", backgroundColor: "#313030" }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={props.onSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
