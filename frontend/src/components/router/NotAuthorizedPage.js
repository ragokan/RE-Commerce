import React from "react";
import { Result, Button } from "antd";
import lokaly from "lokaly";
import { Link } from "react-router-dom";

const NotAuthorizedPage = () => {
  return (
    <>
      <h3 className="center container-fluid">
        <Result
          status="403"
          title="403"
          subTitle={lokaly("notAuthorized")}
          extra={
            <Button type="primary">
              <Link to="/login" className="text-white">
                {lokaly("login")}
              </Link>
            </Button>
          }
        />
      </h3>
    </>
  );
};

export default NotAuthorizedPage;
