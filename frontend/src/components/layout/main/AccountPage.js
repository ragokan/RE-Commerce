import React, { useState } from "react";
import { Menu } from "antd";
import { UserOutlined, MessageOutlined, ShoppingOutlined } from "@ant-design/icons";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import AccountDetails from "../../account/AccountDetails";
import ContactUs from "../../account/ContactUs";
import Purchases from "../../account/Purchases";

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
              <Menu.Item key="purchase" icon={<ShoppingOutlined />}>
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
                padding: "10px 40px",
                margin: 0,
                minHeight: 280,
              }}
            >
              {currentRoute === "account" && <AccountDetails />}
              {currentRoute === "purchase" && <Purchases />}
              {currentRoute === "contact" && <ContactUs />}
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default AccountPage;
