import React from "react";
import { Carousel } from "react-bootstrap";

const Carousal = () => {
  return (
    <div className="m-3 p-3">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-success">TRY ITALIAN FOOD LIKE NEVER BEFORE</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1412465112/photo/flat-lay-of-family-dinner-table-with-italian-food.jpg?s=1024x1024&w=is&k=20&c=Zx4B5LfDc_LWrcI9NZjrzMT-J7LIXV-4SbsyWiP3erk="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-success">TRY ITALIAN FOOD LIKE NEVER BEFORE</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1404001243/photo/italian-food-assortment-on-dark-background.jpg?s=1024x1024&w=is&k=20&c=Cu5Lvxz81Po-r-jnmBzuEr9WtCm7gFQPQJaCui6nzlo="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-success">TRY ITALIAN FOOD LIKE NEVER BEFORE</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
