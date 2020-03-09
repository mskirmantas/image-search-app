import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./SearchBar.scss";

interface SearchBarProps {
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchClick: () => void;
  onSubmitClick: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = props => {
  const onEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onSubmitClick();
    }
  };
  return (
    <div className="SearchBar">
      <div className="input-field">
        <Icon className="input-field-icon">search</Icon>
        <input
          type="text"
          placeholder="Search for images"
          value={props.input}
          onChange={props.onInputChange}
          onKeyPress={onEnterKeyPress}
        />
        {props.input ? (
          <Icon
            className="input-field-icon clear-icon"
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
            style={{ backgroundColor: "#1a1a1a", color: "#eeeeee" }}
            variant="contained"
            type="submit"
            onClick={props.onSubmitClick}
          >
            <Icon id="search-btn-icon">search</Icon>
            <span id="search-btn-text">Search</span>
          </Button>
        )}
      </div>
    </div>
  );
};
