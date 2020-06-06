import React from "react";

import { IData } from "../../App";
import { ImageListItem } from "../ImageListItem/ImageListItem";

import "./ImageList.scss";

interface ImageListProps {
  images: IData[];
  queryValue: string;
}

export const ImageList: React.FC<ImageListProps> = (props) => {
  const [activeImageID, setActiveImageID] = React.useState<string | undefined>(
    undefined
  );

  const toggleActiveImage = (imageID: string) => {
    activeImageID === imageID
      ? setActiveImageID(undefined)
      : setActiveImageID(imageID);
  };

  return (
    <div className="ImageList">
      <div className="container">
        <div className="search-name">
          <h2>{props.queryValue}</h2>
        </div>

        {props.images.map((image: IData) => {
          return (
            <ImageListItem
              key={image.id}
              image={image}
              isActive={image.id === activeImageID}
              onImageClick={() => toggleActiveImage(image.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
