import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
    return;
  };

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

          <div className="d-flex justify-content-around">
            <div className="p-2">
              {user && (
                <div className="text-white">
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={user?.photoURL}
                  />
                </div>
              )}
            </div>

            <div className="p-2">
              {user ? (
                <Button
                  onClick={handleLogOut}
                  type="button"
                  className="btn btn-success"
                >
                  Log out
                </Button>
              ) : (
                <Link to="/login">
                  <Button type="button" className="btn btn-success">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
