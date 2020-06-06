import React from "react";

import { IData } from "../../App";
import { HistoryContainer } from "../HistoryContainer/HistoryContainer";
import { ImageList } from "../ImageList/ImageList";
import { LandingMessage, ErrorMessage } from "../Messages/Messages";

import "./Content.scss";

interface ContentProps {
  images: IData[];
  searchHistory: string[];
  error: string;
  queryValue: string;
  showHistory: boolean;
  onHistoryItemClick: (query: string) => void;
  onRemoveItemClick: (query: string) => void;
}

export const Content: React.FC<ContentProps> = (props) => {
  return (
    <div
      className="Content"
      style={{
        backgroundImage: props.images.length !== 0 ? "none" : "",
      }}
    >
      {props.showHistory ? (
        <HistoryContainer
          searchHistory={props.searchHistory}
          onHistoryItemClick={props.onHistoryItemClick}
          onRemoveHistoryItem={props.onRemoveItemClick}
        />
      ) : null}

      {props.images.length === 0 ? (
        <>
          <LandingMessage error={props.error} />
        </>
      ) : (
        <ImageList images={props.images} queryValue={props.queryValue} />
      )}
      <ErrorMessage error={props.error} />
    </div>
  );
};
