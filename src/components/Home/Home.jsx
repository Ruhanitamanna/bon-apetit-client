import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import ChefsSection from "../ChefsSection/ChefsSection";
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
      <h1>
        Know The <span className="text-success">CHEFS</span>{" "}
      </h1>
      <div>
        {infos.map((info) => (
          <ChefsSection key={info.id} info={info}></ChefsSection>
        ))}
      </div>
    </div>
  );
};

export default Home;
