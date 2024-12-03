import React from "react";
import "./logosCarousel.css";

export const LogosCarousel = ({
  children,
  background,
  width,
  imgSize = 12.5,
  spacing = 3,
  speed,
}) => {
  const setSpeed = () => {
    if (speed) {
      if (speed == 1) {
        return " one";
      } else if (speed == 2) {
        return " two";
      } else if (speed == 3) {
        return " three";
      } else if (speed == 4) {
        return " four";
      } else if (speed == 5) {
        return " five";
      }
    } else return "";
  };
  const classSpeed = setSpeed();

  const setWidth = () => {
    if (width) {
      if (width == 25) {
        return " tf";
      } else if (width == 50) {
        return " ft";
      } else if (width == 75) {
        return " sf";
      } else if (width == 100) {
        return " hd";
      }
    } else return "";
  };
  const classWidth = setWidth();

  const CarouselContent = ({ imgSize, spacing }) => {
    return (
      <div
        className={"carousel__logos carousel__logos-active" + " " + classSpeed}
        style={{
          "--imgHeight": `${imgSize}rem`,
          "--imgSpacing": `${spacing}rem`,
        }}
      >
        {children.length < 2 ? children : children.map((child) => child)}
      </div>
    );
  };

  return (
    <div
      className={"carousel-container" + " " + classWidth}
      style={{
        background: background,
        "--carouselWidth": `${width ? width : 100}%`,
      }}
    >
      <div
        className="carousel__overlay"
        style={{
          "--carousel-vanish-color": `${
            background ? background : "transparent"
          }`,
        }}
      />
      <CarouselContent imgSize={imgSize} spacing={spacing} />
      <CarouselContent imgSize={imgSize} spacing={spacing} />
      {
        /* For solving the bug, where if the number of images are not enough to complete screen width it doesn't repeat fluently */
        children.length < 4 ? (
          <CarouselContent imgSize={imgSize} spacing={spacing} />
        ) : (
          ""
        )
      }
    </div>
  );
};
