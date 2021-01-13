import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { AddErrorAction } from "../../actions/ErrorActions";

const { TextArea } = Input;

const BecameASeller = ({ AddErrorAction }) => {
  const onFinish = (values) => {
    AddErrorAction(
      "You successfully applied to be a seller, if you have any other reasons, you can sent us another application again!",
      "success"
    );
  };
  return (
    <>
      <Form name="basic" onFinish={onFinish} className="productForm">
        <Form.Item
          label="Company Name"
          name="companyname"
          rules={[{ required: true, message: "Please enter a valid name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company Details"
          name="companydetails"
          rules={[{ required: true, message: "Please enter a message!" }]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { AddErrorAction };

export default connect(mapStateToProps, mapDispatchToProps)(BecameASeller);
