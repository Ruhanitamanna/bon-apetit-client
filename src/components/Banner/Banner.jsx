import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container mt-4" style={{ backgroundColor: "lightpink" }}>
        <div className="d-lg-flex justify-content-between p-4 ">
          <div>
            <h1>
              <span className="text-success">FOOD</span>
              <br /> to satisfy your soul
            </h1>
            <br />
            <h3>
              Explore The Variety Of
              <span className="text-success">Italian</span> Cousin
            </h3>
            <br />
            <br />
            <h5>We Are Here To Boost Your Food Experience </h5>
          </div>
          <img
            className="w-50"
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
