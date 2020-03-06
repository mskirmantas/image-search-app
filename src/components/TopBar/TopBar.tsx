import React from "react";
import Icon from "@material-ui/core/Icon";

export const TopBar: React.FC = () => {
  return (
    <div className="TopBar">
      <div className="search-field">
        <Icon className="search-bar-icon">search</Icon>
        <input type="text" placeholder="Search free high-resolution images" />

        <Icon className="search-bar-icon clear-icon">close</Icon>
      </div>
    </div>
  );
};
