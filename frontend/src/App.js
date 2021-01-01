import React from "react";
import Router from "./components/router/Router";
import DataHooks from "./components/utils/DataHooks";

function App() {
  return (
    <>
      <DataHooks />
      <Router />
    </>
  );
}

export default App;
