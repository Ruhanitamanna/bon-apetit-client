import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Spinner } from "react-bootstrap";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="container">
      <Header></Header>
      <div>
        {navigation.state === "loading" && <Spinner animation="border" />}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
