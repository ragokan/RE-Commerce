import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import HomePage from "../layout/main/HomePage";
import BasketPage from "../products/BasketPage";
import AccountPage from "../layout/main/AccountPage";
import SellerPage from "../layout/main/SellerPage";
import NotAuthorizedPage from "./NotAuthorizedPage";

const Routes = ({ user }) => {
  return (
    <>
      <Route exact path="/login" component={Login}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/register" component={Register}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute exact path="/basket" component={BasketPage} />
      <PrivateRoute exact path="/account" component={AccountPage} />
      <PrivateRoute exact path="/seller" component={SellerPage}>
        {user && user.type === "user" && <NotAuthorizedPage />}
      </PrivateRoute>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
