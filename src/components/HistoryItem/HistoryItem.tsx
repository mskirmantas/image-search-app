import React from "react";

interface HistoryItemProps {
  historyItem: string;
  onClick: () => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = props => {
  return (
    <div className="HistoryItem" onClick={props.onClick}>
      <h4>{props.historyItem}</h4>
    </div>
  );
};
