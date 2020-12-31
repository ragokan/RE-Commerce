import React from "react";
import { Link, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = false;
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

export default PrivateRoute;
