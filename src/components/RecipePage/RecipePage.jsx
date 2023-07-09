import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipePage = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  const {
    name,
    picture,
    bio,
    likes,
    num_recipes,
    experience,
    recipe1_name,
    recipe1_image,
    recipe1_ingredients,
    recipe1_cooking_method,
    recipe2_name,
    recipe2_image,
    recipe2_ingredients,
    recipe2_cooking_method,
    recipe3_name,
    recipe3_image,
    recipe3_ingredients,
    recipe3_cooking_method,
  } = recipe;

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5 m-5">
        <div className="m-2 p-2">
          <img src={picture} alt="" />
        </div>
        <div className="m-2 p-2">
          <h5>{name}</h5>
          <p> Likes :{likes}</p>
          <p>
            Number of Recipes by {name} : {num_recipes}
          </p>
          <p>{experience} Years of experience</p>
          <p>{bio}</p>
        </div>
      </div>
      <div>
        <h2>
          Recipes By <span>{name}</span>
        </h2>
      </div>

      <div>
        <div className="card-group gap-4 m-5 p-4 border border-2">
          <div className="card">
            <img src={recipe1_image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{recipe1_name}</h3>
              <h6>INGREDIENTS</h6>
              <p className="card-text">{recipe1_ingredients}</p>
              <h6>COOKING METHOD</h6>
              <p className="card-text">{recipe1_cooking_method}</p>
            </div>
          </div>
          <div className="card">
            <img src={recipe2_image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{recipe2_name}</h3>
              <h6>INGREDIENTS</h6>
              <p className="card-text">{recipe2_ingredients}</p>
              <h6>COOKING METHOD</h6>
              <p className="card-text">{recipe2_cooking_method}</p>
            </div>
          </div>
          <div className="card">
            <img src={recipe3_image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{recipe3_name}</h3>
              <h6>INGREDIENTS</h6>
              <p className="card-text">{recipe3_ingredients}</p>
              <h6>COOKING METHOD</h6>
              <p className="card-text">{recipe3_cooking_method}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

// import React, { useContext } from "react";
// import { DataContext } from "../ContextProvider/ContextProvider";
// import { useLoaderData, useParams } from "react-router-dom";

// // const infos = useContext(DataContext);
// // console.log(infos);
// const RecipePage = () => {
//   //   const { id } = useParams();
//   const recipe = useLoaderData();
//   const { name } = recipe;
//   return;
//   <div>
//     <p>Name: {name}</p>
//   </div>;
// };

// export default RecipePage;
