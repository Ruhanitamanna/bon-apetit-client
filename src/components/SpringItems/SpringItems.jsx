import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const SpringItems = () => {
  return (
    <div>
      <h2>
        <span className="text-success">SPRING</span> recipes
      </h2>
      <CardGroup className="p-4 m-4 gap-3">
        <Card style={{ backgroundColor: "lavenderblush" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Card.Body>
            <Card.Title>PANZANELLA SALAD WITH BURRATA CHEESE</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "lavenderblush" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Card.Body>
            <Card.Title>BRUSCHETTA </Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "lavenderblush" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1555072930-714bba1d24e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Card.Body>
            <Card.Title>RED HAVEN PEACH & BLUEBERRY CRISP</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default SpringItems;
