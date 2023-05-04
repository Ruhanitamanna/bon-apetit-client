import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import ChefsSection from "../ChefsSection/ChefsSection";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [infos, setInfos] = useState([]);

  //   const { id, name } = info;
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="text-center">
      <Banner></Banner>
      <h1 className="mt-4">
        Know The <span className="text-success">CHEFS</span>
      </h1>
      <div
        className="container text-center m-4 p-4 "
        style={{ backgroundColor: "lavenderblush" }}
      >
        <div className="row">
          {infos.map((info) => (
            <div className=" col-lg-4 col-md-6 col-sm-12 my-4">
              <ChefsSection key={info.id} info={info}></ChefsSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
