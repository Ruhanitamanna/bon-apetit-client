import React, { useContext } from "react";
import { DataContext } from "../ContextProvider/ContextProvider";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = () => {
  const infos = useContext(DataContext);
  //   console.log(infos);

  return (
    <div className="container">
      <div className="row">
        {infos.map((info) => (
          <div className=" col-lg-4 col-md-6 col-sm-12 my-4">
            <Card
              key={info.id}
              style={{ width: "18rem", backgroundColor: "lavenderblush" }}
            >
              <Card.Img variant="top" src={info.picture} />
              <Card.Body>
                <h4>{info.name}</h4>
                <div>
                  <p>{info.experience} Years of experience</p>
                  <p>{info.num_recipes} Recipes</p>
                  <p>{info.likes} likes</p>
                </div>
                <Link to={`/recipePage/${info.id}`}>
                  <Button variant="success">View Recipes</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
