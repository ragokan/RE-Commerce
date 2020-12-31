import React from "react";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch></Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
