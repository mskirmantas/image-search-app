import React from "react";

import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import { HistoryButton } from "../HistoryButton/HistoryButton";

import "./TopBar.scss";

interface TopBarProps {
  input: string;
  isLoading: boolean;
  showHistory: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchClick: () => void;
  onSubmitClick: () => void;
  onHistoryToggle: () => void;
}

export const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <div className="TopBar">
      <div className="container">
        <Logo />
        <SearchBar
          input={props.input}
          onInputChange={props.onInputChange}
          onClearSearchClick={props.onClearSearchClick}
          onSubmitClick={props.onSubmitClick}
          isLoading={props.isLoading}
        />
        <HistoryButton
          onHistoryToggle={props.onHistoryToggle}
          showHistory={props.showHistory}
        />
      </div>
    </div>
  );
};
