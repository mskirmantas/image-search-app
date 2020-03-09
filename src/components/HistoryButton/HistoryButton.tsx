import React from "react";
import Icon from "@material-ui/core/Icon";

import "./HistoryButton.scss";

interface HistoryButtonProps {
  showHistory: boolean;
  onHistoryToggle: () => void;
}

export const HistoryButton: React.FC<HistoryButtonProps> = props => {
  return (
    <div className="HistoryButton">
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
  );
};
