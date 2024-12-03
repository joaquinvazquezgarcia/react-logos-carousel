import React from "react";
export const CarouselItem = ({ src, alt, title }) => {
  return <img className="carousel__img" src={src} alt={alt} title={title} />;
};
