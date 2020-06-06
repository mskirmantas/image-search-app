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
        className="HistoryButton-icon"
        style={{
          color: props.showHistory ? "#1a1a1a" : ""
        }}
      >
        history
      </Icon>
    </div>
  );
};
