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
              <span>R/E-Commerce</span>
            </Link>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
