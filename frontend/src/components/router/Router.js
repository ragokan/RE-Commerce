import React from "react";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import RouterContent from "./RouterContent";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <RouterContent></RouterContent>
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
