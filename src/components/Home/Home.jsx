import React, { useEffect, useState } from "react";
import "./Home.css";

import SpringItems from "../SpringItems/SpringItems";
import ReviewPage from "../ReviewPage/ReviewPage";

import ContextProvider from "../ContextProvider/ContextProvider";
import Carousal from "../Carousal/Carousal";

const Home = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("https://bon-apetit-server-ruhanitamanna.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="text-center">
      <Carousal></Carousal>

      <h1 className="mt-4">
        Know The <span className="text-success">CHEFS</span>
      </h1>
      <ContextProvider></ContextProvider>

      <SpringItems></SpringItems>
      <ReviewPage></ReviewPage>
    </div>
  );
};

export default Home;
