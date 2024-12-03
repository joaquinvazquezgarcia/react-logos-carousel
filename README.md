# logos-carousel-react

A fully responsive and customizable React carousel, ideal for showcasing logos, images, or other visual content. 
**Features:**
- Smooth infinite scrolling.
- Fully customizable via props.
- Lightweight and easy to integrate.
  
<br>

## Installation

Install the package using npm:

```bash
npm i logos-carousel-react
```

<br>

### Prerequisites:

Ensure you are using React 16+ and React-DOM 16+.

<br>

## Basic Usage

Import and use the `LogosCarousel` and `CarouselItem` components to build a carousel.

<br>

### Example

```jsx
import React from "react";
import { LogosCarousel, CarouselItem } from "logos-carousel-react";

const App = () => {
  return (
    <LogosCarousel>
      <CarouselItem src="logo1.png" alt="Logo 1" title="Logo 1" />
      <CarouselItem src="logo2.png" alt="Logo 2" title="Logo 2" />
      <CarouselItem src="logo3.png" alt="Logo 3" title="Logo 3" />
    </LogosCarousel>
  );
};

export default App;
```
<br>

## Props for `LogosCarousel`

| Prop        | Type          | Default      | Description                                                                            |
|-------------|---------------|--------------|----------------------------------------------------------------------------------------|
| `background`| `string`      | `transparent`| Carousel background color. Accepts values like `#FFF`, `rgba(0,0,0,0.5)`, etc.         |
| `width`     | `number`      | `100`        | Carousel width as a percentage (`25`, `50`, `75`, or `100`).                           |
| `imgSize`   | `number`      | `12.5`       | Image height in `rem`.                                                                 |
| `spacing`   | `number`      | `3`          | Spacing between images in `rem`.                                                      |
| `speed`     | `number`      | N/A          | Scrolling speed of the carousel. Possible values: `1`, `2`, `3`, `4`, `5`.             |


### Example with Props

```jsx
<LogosCarousel background="#333" width={75} imgSize={10} spacing={2} speed={3}>
  <CarouselItem src="logo.png" alt="Example Logo" />
</LogosCarousel>
```

<br>

## Props for `CarouselItem`

| Prop    | Type     | Default | Description                              |
|---------|----------|---------|------------------------------------------|
| `src`   | `string` | N/A     | The URL or path of the logo image.       |
| `alt`   | `string` | N/A     | Alt text for the image.                  |
| `title` | `string` | N/A     | Title displayed when hovering over the image. |

<br>

## Custom Styling

The package includes a CSS file (`logosCarousel.css`) that provides the base styles for the carousel. You can override these styles in your project or extend them as needed.

### Main Classes

- **`carousel-container`**: The main container of the carousel.
- **`carousel__logos`**: The inner container for scrolling images.
- **`carousel__img`**: The class for individual logo images.


<br>

## Notes

1. If the number of items in the carousel is less than four, the component automatically duplicates the items to maintain smooth scrolling.
2. The `speed` prop adjusts internal classes to control animation timing.
3. Ensure your images are properly formatted and optimized for better performance.


<br>

## If You Have Questions

If you have questions or need support, open an issue on the [package repository](https://github.com/joaquinvazquezgarcia/react-logos-carousel).

Enjoy using **logos-carousel-react**! 🎠
