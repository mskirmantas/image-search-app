import React from "react";
import { HistoryItem } from "../HistoryItem";

interface SearchHistoryBarProps {
  searchHistory: string[];
  onHistoryItemClick: (query: string) => void;
  onRemoveHistoryItem: (query: string) => void;
}

export const SearchHistoryBar: React.FC<SearchHistoryBarProps> = props => {
  return (
    <div className="SearchHistoryBar">
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
