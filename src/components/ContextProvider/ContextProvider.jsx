import React, { createContext, useEffect, useState } from "react";

import Chefs from "../Chefs/Chefs";

export const DataContext = createContext();

const ContextProvider = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("https://bon-apetit-server-ruhanitamanna.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        setInfos(data);
        console.log(data);
      })
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
