import React from "react";
import Icon from "@material-ui/core/Icon";

export const TopBar: React.FC = () => {
  const [search, setSearch] = React.useState("");

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.substring(0, 50));
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="TopBar">
      <div className="logo">
        <h1>Unsearch</h1>
      </div>

      <div className="search-field">
        <Icon className="search-bar-icon">search</Icon>
        <input
          type="text"
          placeholder="Search free high-resolution images"
          value={search}
          onChange={updateSearch}
        />
        {search ? (
          <Icon className="search-bar-icon clear-icon" onClick={clearSearch}>
            close
          </Icon>
        ) : null}
      </div>
    </div>
  );
};
