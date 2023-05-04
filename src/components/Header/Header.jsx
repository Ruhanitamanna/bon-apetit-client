import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-4  ">
            <ActiveLink
              className="text-decoration-none p-1  text-success"
              to="/"
            >
              Home
            </ActiveLink>
            <ActiveLink
              className="text-decoration-none p-1  text-success"
              to="/blog"
            >
              Blog
            </ActiveLink>
          </Nav>
          <Navbar.Brand href="#home">Bon Appétit</Navbar.Brand>

          <Link to="/login">
            <Button type="button" className="btn btn-success">
              {" "}
              Login
            </Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
