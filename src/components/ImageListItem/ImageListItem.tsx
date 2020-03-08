import React from "react";

import { IData } from "./../Root";

interface ImageListItemProps {
  image: IData;
  isActive: boolean;
  onClick: () => void;
}

export const ImageListItem: React.FC<ImageListItemProps> = props => {
  return (
    <>
      {props.isActive ? (
        <div className="ActiveImage" onClick={props.onClick}>
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
      ) : null}

      <div className="ImageListItem" onClick={props.onClick}>
        <img
          className="image-small"
          src={props.image.url_regular}
          alt={props.image.description}
        />
        <div className="author">
          <img
            src={props.image.author_image}
            alt={props.image.author + "'s profile image"}
          />
          <h2>{props.image.author}</h2>
        </div>
      </div>
    </>
  );
};
