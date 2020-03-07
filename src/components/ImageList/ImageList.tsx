import React from "react";
import { IData } from "./../Root";

interface ImageListProps {
  images: IData[];
}

export const ImageList: React.FC<ImageListProps> = props => {
  return (
    <div className="ImageList">
      {props.images.map((image: IData) => {
        return (
          <img key={image.id} src={image.url_small} alt={image.description} />
        );
      })}
    </div>
  );
};
