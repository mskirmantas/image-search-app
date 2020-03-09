import React from "react";
import Icon from "@material-ui/core/Icon";

import "./HistoryItem.scss";

interface HistoryItemProps {
  historyItem: string;
  onItemClick: () => void;
  onRemoveClick: () => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = props => {
  return (
    <>
      <div className="HistoryItem">
        <div className="search-again-button" onClick={props.onItemClick}>
          <h4>{props.historyItem}</h4>
        </div>
        <div className="remove-button" onClick={props.onRemoveClick}>
          <Icon>close</Icon>
        </div>
      </div>
    </>
  );
};
