import React, { useContext, useEffect, useReducer, useState } from "react";
import { MainContext } from "./Reducer/Store";
import Search from "./components/Serach/Search";
import Data from "./components/Data";
import Home from "./pages/Home";





const App = () => {

  return (
    <MainContext.Provider value={{ store, dispatch }}>
      {/* <Search /> */}
      <Data />
    </MainContext.Provider>
  );
};

export default App;
