import React, { useState } from "react";
import { Card, Menu } from "antd";
import { UserOutlined, MessageOutlined, ShoppingOutlined } from "@ant-design/icons";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import AccountDetails from "../../account/AccountDetails";
import ContactUs from "../../account/ContactUs";
import Purchases from "../../account/Purchases";
import lokaly from "lokaly";

const AccountPage = () => {
  const [currentRoute, setCurrentRoute] = useState("account");
  return (
    <>
      <div className="container-fluid">
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              onClick={(e) => setCurrentRoute(e.key)}
              style={{ width: 256, minHeight: "82vh" }}
              defaultSelectedKeys={["account"]}
              mode="inline"
            >
              <Menu.Item key="account" icon={<UserOutlined />}>
                Account
              </Menu.Item>
              <Menu.Item key="purchases" icon={<ShoppingOutlined />}>
                Purchases
              </Menu.Item>
              <Menu.Item key="contact" icon={<MessageOutlined />}>
                Contact Us
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: "0px 40px",
                margin: 0,
                minHeight: 280,
              }}
            >
              <Card title={lokaly(currentRoute)} style={{ textTransform: "capitalize" }}>
                {currentRoute === "account" && <AccountDetails />}
                {currentRoute === "purchases" && <Purchases />}
                {currentRoute === "contact" && <ContactUs />}
              </Card>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default AccountPage;
