import React from "react";
import { SearchHistoryBar } from "./../SearchHistoryBar";
import { ImageList } from "./../ImageList";
import { IData } from "./../Root";

interface ContentProps {
  images: IData[];
  searchHistory: string[];
  error: string;
  showHistory: boolean;
  onHistoryItemClick: (query: string) => void;
}

export const Content: React.FC<ContentProps> = props => {
  return (
    <div
      className="Content"
      style={{
        backgroundImage: props.images.length !== 0 ? "none" : ""
      }}
    >
      {props.showHistory ? (
        <SearchHistoryBar
          searchHistory={props.searchHistory}
          onHistoryItemClick={props.onHistoryItemClick}
        />
      ) : null}

      <div className="error-message">
        <h3>{props.error}</h3>
      </div>

      <ImageList images={props.images} />
    </div>
  );
};