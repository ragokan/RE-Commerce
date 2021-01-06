import React from "react";
import { Result, Button } from "antd";
import { useHistory, useParams } from "react-router";

const CheckoutSuccess = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <>
      <Result
        status="success"
        title="Payment is Successfully Completed!"
        subTitle={`Order number: ${id} - You can check the status of your order in your account page.`}
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() =>
              history.push({
                pathname: "/account",
                state: { route: "purchases" },
              })
            }
          >
            Go To Orders
          </Button>,
          <Button key="buy" onClick={() => history.push("/")}>
            Go To Main Page
          </Button>,
        ]}
      />
    </>
  );
};

export default CheckoutSuccess;
