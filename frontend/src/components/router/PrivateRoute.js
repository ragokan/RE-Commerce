import { connect } from "react-redux";
import React from "react";
import { Route } from "react-router-dom";
import NotAuthorizedPage from "./NotAuthorizedPage";

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => (user ? <Component {...props} /> : <NotAuthorizedPage />)}
      ></Route>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
