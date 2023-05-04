import React from "react";
import { Button } from "react-bootstrap";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

  return (
    <div className="text-center mt-5">
      <Button type="button" class="btn btn-outline-success">
        Email/Password
      </Button>
      <br />
      <Button type="button" class="btn btn-outline-success">
        Google sign-in
      </Button>
      <br />
      <Button type="button" class="btn btn-outline-success">
        Github sign-in
      </Button>
      <br />
      <Link to="/registration">
        <p>New here? Go to Registration</p>
      </Link>
    </div>
  );
};

export default Login;
