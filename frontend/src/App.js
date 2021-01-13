import React, { Suspense } from "react";
import Router from "./components/router/Router";
import DataHooks from "./components/utils/DataHooks";
import ErrorBoundary from "./ErrorBoundary";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>R/E-Commerce</title>
      </Helmet>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DataHooks />
          <Router />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
