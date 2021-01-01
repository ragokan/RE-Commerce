import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouterContent from "./RouterContent";
import Routes from "./Routes";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <RouterContent>
            <Routes />
          </RouterContent>
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
