import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import app from "../../Firebase/Firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logIn, user, googleLogIn, githubLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    return googleLogIn();
  };
  const handleGithubLogin = () => {
    return githubLogIn();
  };

  return (
    <div className="mx-auto w-50 my-5 p-5 ">
      <h2>Please Log In</h2>

      <Container>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Container>

      {/* google and github button */}

      <div className="mx-auto">
        <br />
        <Button
          onClick={handleGoogleLogin}
          className="m-2 text-primary"
          variant="outline-success"
        >
          <FaGoogle></FaGoogle>
          <span className="p-1"> Google sign-in</span>
        </Button>

        <br />
        <Button
          onClick={handleGithubLogin}
          className="m-2 text-primary"
          variant="outline-success"
        >
          <FaGithub></FaGithub>
          <span className="p-1">Github sign-in</span>
        </Button>
      </div>
      <Link to="/registration">
        <p className="mt-2">New here? Go to Registration</p>
      </Link>
    </div>
  );
};

export default Login;
