import React from "react";

const ReviewPage = () => {
  return (
    <div className="p-4 m-4" style={{ backgroundColor: "lightpink" }}>
      <h1>What People are saying about us</h1>
      <div className="d-lg-flex justify-content-between p-4">
        <p>
          <span className="text-success">Olivia Rodrigo</span>:easy to make
          recipes.loved to try cooking.great experience of Italian cousin.
        </p>
        <p>
          <span className="text-success">Ariana Grande</span>:easy to make
          recipes.loved to try cooking.great experience of Italian cousin.
        </p>
        <p>
          <span className="text-success">Kim jennie</span>:easy to make
          recipes.loved to try cooking.great experience of Italian cousin.
        </p>
        <p>
          <span className="text-success">Jonny depp</span>:easy to make
          recipes.loved to try cooking.great experience of Italian cousin.
        </p>
      </div>
    </div>
  );
};

export default ReviewPage;
