import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-4  ">
            <Link className="text-decoration-none p-1  text-success" to="/">
              Home
            </Link>
            <Link className="text-decoration-none p-1  text-success" to="/blog">
              Blog
            </Link>
          </Nav>
          <Navbar.Brand href="#home">Bon Appétit</Navbar.Brand>

          <Button type="button" className="btn btn-success">
            Login
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
