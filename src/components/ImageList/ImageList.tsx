import React from "react";
import { ImageListItem } from "./../ImageListItem";
import { IData } from "./../Root";

interface ImageListProps {
  images: IData[];
  queryValue: string;
}

export const ImageList: React.FC<ImageListProps> = props => {
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
        <h2>{props.queryValue}</h2>
        {props.images.map((image: IData) => {
          return (
            <ImageListItem
              key={image.id}
              image={image}
              isActive={image.id === activeImageID}
              onClick={() => toggleActiveImage(image.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
