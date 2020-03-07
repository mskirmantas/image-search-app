import React from "react";
import { IData } from "./../Root";

interface ImageListItemProps {
  image: IData;
}

export const ImageListItem: React.FC<ImageListItemProps> = props => {
  return (
    <div className="ImageListItem">
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
  );
};
