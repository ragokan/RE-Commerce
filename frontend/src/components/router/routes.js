import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";

const Routes = () => {
  let user = false;
  return (
    <>
      <Route exact path="/login" component={Login}>
        {user && <Redirect to="/" />}
      </Route>
    </>
  );
};

export default Routes;
