import React from "react";
import lokaly from "lokaly";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = ({ email, password }) => {};
  return (
    <>
      <div className="block">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("login")}</h2>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item name="email" rules={[{ required: true, message: lokaly("emailRule") }]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: lokaly("passwordRule") }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={lokaly("password")}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                {lokaly("login")}
              </Button>
              <br />
              {lokaly("or")} <Link to="/register">{lokaly("registerNow")}</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
