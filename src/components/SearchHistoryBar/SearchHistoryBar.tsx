import React from "react";
import { HistoryItem } from "../HistoryItem";

interface SearchHistoryBarProps {
  searchHistory: string[];
  onHistoryItemClick: (query: string) => void;
}

export const SearchHistoryBar: React.FC<SearchHistoryBarProps> = props => {
  return (
    <div className="SearchHistoryBar">
      {props.searchHistory.map((historyItem: string) => {
        return (
          <HistoryItem
            key={historyItem}
            historyItem={historyItem}
            onClick={() => props.onHistoryItemClick(historyItem)}
          />
        );
      })}
    </div>
  );
};
