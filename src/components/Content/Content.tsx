import React from "react";
import { SearchHistoryBar } from "./../SearchHistoryBar";
import { ImageList } from "./../ImageList";
import { IData } from "./../Root";

interface ContentProps {
  images: IData[];
  searchHistory: string[];
  error: string;
  queryValue: string;
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

      {props.images.length === 0 ? (
        <>
          <div
            className="landing-message"
            style={{ display: !props.error ? "" : "none" }}
          >
            <h1>Unsearch</h1>
            <h3>An image search app powered by Unsplash API</h3>
          </div>
        </>
      ) : (
        <ImageList images={props.images} queryValue={props.queryValue} />
      )}
      <div
        className="error-message"
        style={{ display: props.error ? "" : "none" }}
      >
        <h2>{props.error}</h2>
      </div>
    </div>
  );
};
