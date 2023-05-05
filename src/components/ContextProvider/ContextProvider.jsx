import React, { createContext, useEffect, useState } from "react";
import ChefsSection from "../ChefsSection/ChefsSection";
import Chefs from "../Chefs/Chefs";

const DataContext = createContext();

const ContextProvider = () => {
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <DataContext.Provider value={infos}>
        <Chefs />
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
