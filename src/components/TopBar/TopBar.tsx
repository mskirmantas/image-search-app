import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./TopBar.scss";

interface TopBarProps {
  input: string;
  isLoading: boolean;
  showHistory: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchClick: () => void;
  onSubmitClick: () => void;
  onHistoryToggle: () => void;
}

export const TopBar: React.FC<TopBarProps> = props => {
  const onEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onSubmitClick();
    }
  };
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
              placeholder="Search for images"
              value={props.input}
              onChange={props.onInputChange}
              onKeyPress={onEnterKeyPress}
            />
            {props.input ? (
              <Icon
                className="search-field-icon clear-icon"
                onClick={props.onClearSearchClick}
              >
                close
              </Icon>
            ) : null}
          </div>
          <div className="search-button">
            {props.isLoading ? (
              <CircularProgress id="loading-icon" />
            ) : (
              <Button
                style={{ backgroundColor: "#1a1a1a" }}
                variant="contained"
                color="primary"
                type="submit"
                onClick={props.onSubmitClick}
              >
                <Icon id="search-btn-icon">search</Icon>
                <span id="search-btn-text">Search</span>
              </Button>
            )}
          </div>
        </div>
        <div className="search-history-tab">
          <Icon
            onClick={props.onHistoryToggle}
            style={{
              fontSize: "35px",
              color: props.showHistory ? "#1a1a1a" : ""
            }}
          >
            history
          </Icon>
        </div>
      </div>
    </div>
  );
};
