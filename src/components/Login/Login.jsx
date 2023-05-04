import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

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
    console.log("github");
  };

  return (
    <div className="text-center mt-5 ">
      {user && (
        <div>
          <img src={user.photoUrl} alt="" />
        </div>
      )}
      <Button
        onClick={handleEmailLogin}
        type="button"
        className="btn btn-outline-white"
      >
        Email/Password
      </Button>
      <br />
      <Button
        onClick={handleGoogleLogin}
        type="button"
        className="mt-4 btn btn-outline-white"
      >
        Google sign-in
      </Button>

      <br />
      <Button
        onClick={handleGithubLogin}
        type="button"
        className="mt-4 btn btn-outline-white"
      >
        Github sign-in
      </Button>
      <br />
      <Link to="/registration">
        <p className="mt-4">New here? Go to Registration</p>
      </Link>
    </div>
  );
};

export default Login;
