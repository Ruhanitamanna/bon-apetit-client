import React, { useEffect, useState } from "react";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
    console.log(recipes);
  }, []);

  const bannerImage = recipes.length > 0 ? recipes[0].picture : null;

  return (
    <div>
      {bannerImage && <img src={bannerImage} alt="Banner" />}
      <h1>"/recipePage"</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>
            {" "}
            <img src={recipe.picture} alt="" />
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

//   return (
//     <div>
//       <h1>"/recipePage"</h1>
//       {recipes.map((recipe) => {
//         <div key={recipe.id}>
//           <div>
//             {" "}
//             <img src={recipe.name} alt="" srcset="" />
//           </div>
//           <div></div>
//         </div>;
//       })}
//     </div>
//   );
// };

export default RecipePage;
