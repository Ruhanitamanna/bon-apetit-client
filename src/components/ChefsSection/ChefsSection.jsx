import React from "react";
import { Button, Card } from "react-bootstrap";

const ChefsSection = ({ info }) => {
  const { name, picture, experience, num_recipes, likes } = info;
  console.log(name);
  return (
    <div>
      <Card
        className="grid-col-3"
        style={{ width: "18rem", backgroundColor: "lightpink" }}
      >
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <h4>{name}</h4>
          <div>
            <p>{experience} Years of experience</p>
            <p>{num_recipes} Recipes</p>
            <p>{likes} likes</p>
          </div>
          <Button variant="success">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefsSection;
