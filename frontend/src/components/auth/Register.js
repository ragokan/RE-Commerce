import React from "react";
import lokaly from "lokaly";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = ({ name, surname, email, password }) => {};
  return (
    <>
      <div className="block">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("register")}</h2>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: lokaly("nameRule") }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Input placeholder={lokaly("name")} />
              </Form.Item>
              <Form.Item
                name="surname"
                rules={[{ required: true, message: lokaly("surnameRule") }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
              >
                <Input placeholder={lokaly("surname")} />
              </Form.Item>
            </Form.Item>

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
                {lokaly("register")}
              </Button>
              <br />
              {lokaly("or")} <Link to="/login">{lokaly("loginNow")}</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
