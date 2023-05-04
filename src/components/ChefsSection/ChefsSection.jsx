import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefsSection = ({ info }) => {
  const { name, picture, experience, num_recipes, likes } = info;

  return (
    <div>
      <Card style={{ width: "18rem", backgroundColor: "lightpink" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <h4>{name}</h4>
          <div>
            <p>{experience} Years of experience</p>
            <p>{num_recipes} Recipes</p>
            <p>{likes} likes</p>
          </div>
          <Link to="/recipePage">
            <Button variant="success">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefsSection;
