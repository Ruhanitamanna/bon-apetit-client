import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  log in with Email and Password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google log in
  const googleLogIn = () => {
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

  // github login

  const githubLogIn = () => {
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

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      console.log(loggedInUser);
      setUser(loggedInUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // information to  send to other pages
  const authInfo = {
    user,
    createUser,
    logIn,
    googleLogIn,
    logOut,
    githubLogIn,
  };

  //  body
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
