import React from "react";
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

export const TopBar: React.FC = () => {
  const [search, setSearch] = React.useState("");

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.substring(0, 50));
  };

  const clearSearch = () => {
    setSearch("");
  };

  const handleSubmit = () => {};

  return (
    <div className="TopBar">
      <div className="logo">
        <h1>Unsearch</h1>
      </div>
      <div className="search-bar">
        <div className="search-field">
          <Icon className="search-field-icon">search</Icon>
          <input
            type="text"
            placeholder="Search free high-resolution images"
            value={search}
            onChange={updateSearch}
          />
          {search ? (
            <Icon
              className="search-field-icon clear-icon"
              onClick={clearSearch}
            >
              close
            </Icon>
          ) : null}
        </div>
        <Button
          style={{ margin: "auto 5px", backgroundColor: "#1db954" }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
