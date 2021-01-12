import React, { Suspense } from "react";
import Router from "./components/router/Router";
import DataHooks from "./components/utils/DataHooks";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
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
