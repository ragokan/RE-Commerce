import React from "react";
import lokaly from "lokaly";

const Login = () => {
  return (
    <>
      <div className="block">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("login")}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
