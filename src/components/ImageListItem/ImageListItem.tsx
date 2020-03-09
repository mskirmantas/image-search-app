import React from "react";
import { IData } from "./../Root";
import { ImagePreview } from "../ImagePreview";
import "./ImageListItem.scss";

interface ImageListItemProps {
  image: IData;
  isActive: boolean;
  onClick: () => void;
}

export const ImageListItem: React.FC<ImageListItemProps> = props => {
  return (
    <>
      {props.isActive ? (
        <ImagePreview image={props.image} onClick={props.onClick} />
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
