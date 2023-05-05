import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
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
          <Navbar.Brand href="#home">
            <h1>Bon Appétit</h1>
          </Navbar.Brand>

          {user && (
            <Nav.Link className="text-white" href="#deets">
              <FaUserCircle />
            </Nav.Link>
          )}

          {user ? (
            <Button type="button" className="btn btn-success">
              Log out
            </Button>
          ) : (
            <Link to="/login">
              <Button type="button" className="btn btn-success">
                Login
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
