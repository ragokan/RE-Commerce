import { connect } from "react-redux";
import React from "react";
import { Link, Route } from "react-router-dom";

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Component {...props} />
          ) : (
            <>
              <h3 className="center">
                To see this page, you have to <Link to="/login">Login!</Link>
              </h3>
            </>
          )
        }
      ></Route>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
