import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import HomePage from "../layout/main/HomePage";

const Routes = () => {
  let user = false;
  return (
    <>
      <Route exact path="/login" component={Login}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/register" component={Register}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/" component={HomePage} />
    </>
  );
};

export default Routes;
