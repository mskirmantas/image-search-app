import React from "react";

import { IData } from "./../Root";

import "./ImagePreview.scss";

interface ImagePreviewProps {
  image: IData;
  onClick: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = props => {
  return (
    <div className="ImagePreview" onClick={props.onClick}>
      <img
        className="image-large"
        src={props.image.url_full}
        alt={props.image.description}
      />
      <div className="author">
        <h2>
          "{props.image.description}" by {props.image.author}
        </h2>
      </div>
    </div>
  );
};
