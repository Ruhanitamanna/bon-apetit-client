import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto w-50 mt-5 ">
      <h2>Log in options</h2>

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

      <div>
        <br />
        <Button
          onClick={handleGoogleLogin}
          className="m-2"
          variant="outline-success"
        >
          Google sign-in
        </Button>

        <br />
        <Button
          onClick={handleGithubLogin}
          className="m-2"
          variant="outline-success"
        >
          Github sign-in
        </Button>
      </div>
      <Link to="/registration">
        <p className="mt-2">New here? Go to Registration</p>
      </Link>
    </div>
  );
};

export default Login;
