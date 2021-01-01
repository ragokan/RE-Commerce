import React from "react";
import { Layout, Menu } from "antd";
import basket from "../../../resources/basket.png";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className="container-fluid">
          <div className="header">
            <Link to="/" className="logo">
              <img src={basket} alt="basketImg" className="basketImg" />
              <span className="reCommerceText">R/E-Commerce</span>
            </Link>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Login</Menu.Item>
              <Menu.Item key="3">Register</Menu.Item>
              <Menu.Item key="4">nav 4</Menu.Item>
              <Menu.Item key="5">nav 5 nav 6</Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
