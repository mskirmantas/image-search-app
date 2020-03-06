import React from "react";

interface ImageListProps {
  images: any;
}

export const ImageList: React.FC<ImageListProps> = props => {
  return (
    <div className="ImageList">
      {props.images.map((image: any) => {
        return (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        );
      })}
    </div>
  );
};
