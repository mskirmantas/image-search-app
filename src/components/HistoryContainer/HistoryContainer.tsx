import React from "react";

import { HistoryItem } from "../HistoryItem";

import "./HistoryContainer.scss";

interface HistoryContainerProps {
  searchHistory: string[];
  onHistoryItemClick: (query: string) => void;
  onRemoveHistoryItem: (query: string) => void;
}

export const HistoryContainer: React.FC<HistoryContainerProps> = props => {
  return (
    <div className="HistoryContainer">
      {props.searchHistory.map((historyItem: string) => {
        return (
          <HistoryItem
            key={historyItem}
            historyItem={historyItem}
            onItemClick={() => props.onHistoryItemClick(historyItem)}
            onRemoveClick={() => props.onRemoveHistoryItem(historyItem)}
          />
        );
      })}
    </div>
  );
};
