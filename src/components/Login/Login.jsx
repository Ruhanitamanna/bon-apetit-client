import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleEmailLogin = () => {
    console.log("clicked");
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

  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto w-50 mt-5 ">
      <h2>Log in options</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {user ? (
        <Button
          onClick={handleLogOut}
          className="m-4"
          variant="outline-warning"
        >
          Log Out
        </Button>
      ) : (
        <div>
          <Button
            onClick={handleEmailLogin}
            className="m-4"
            variant="outline-success"
          >
            Log In
          </Button>
          <br />
          <Button
            onClick={handleGoogleLogin}
            className="m-4"
            variant="outline-success"
          >
            Google sign-in
          </Button>

          <br />
          <Button
            onClick={handleGithubLogin}
            className="m-4"
            variant="outline-success"
          >
            Github sign-in
          </Button>
        </div>
      )}
      <br />
      <Link to="/registration">
        <p className="mt-4">New here? Go to Registration</p>
      </Link>
    </div>
  );
};

export default Login;
