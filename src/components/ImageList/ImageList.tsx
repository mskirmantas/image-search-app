import React from "react";
import { ImageListItem } from "./../ImageListItem";
import { IData } from "./../Root";

interface ImageListProps {
  images: IData[];
}

export const ImageList: React.FC<ImageListProps> = props => {
  return (
    <div className="ImageList">
      {props.images.map((image: IData) => {
        return <ImageListItem key={image.id} image={image} />;
      })}
    </div>
  );
};
