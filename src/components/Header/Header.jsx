import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bon Appétit</Navbar.Brand>
          <Nav className="ms-4">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
