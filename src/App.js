import React, { useState } from "react";
import "./App.css";
import Cars from "./Cars";
import MyContext from "./myContext";

function App() {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  return (
    <MyContext.Provider value={{ cars, setCars }}>
      <Cars />
    </MyContext.Provider>
  );
}

export default App;
