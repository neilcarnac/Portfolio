import React from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
