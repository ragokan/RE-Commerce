import React from "react";
import { Button, Form, Input, Divider } from "antd";
import { useHistory } from "react-router-dom";
import CheckoutProductList from "./CheckoutProductList";

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const CheckoutValues = ({ loading, children, products }) => {
  const history = useHistory();
  const { TextArea } = Input;
  return (
    <>
      <h2>Products</h2>
      <CheckoutProductList products={products} />
      <Divider />
      <h2>Adress</h2>
      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please enter your city." }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: "Please enter your country." }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Description of Adress"
        name="description"
        rules={[{ required: true, message: "Please enter a description." }]}
      >
        <TextArea />
      </Form.Item>
      <Divider />
      <h2>Card Details</h2>
      {children}
      <Divider />
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          Complete Payment!
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="reset" onClick={() => history.push("/basket")}>
          Cancel Payment
        </Button>
      </Form.Item>
    </>
  );
};

export default CheckoutValues;
