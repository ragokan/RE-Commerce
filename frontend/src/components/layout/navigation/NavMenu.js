import { Menu } from "antd";
import React from "react";

const NavMenu = ({ mode }) => {
  return (
    <>
      <Menu mode={mode} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3">Register</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Menu.Item key="5">nav 5 nav 6</Menu.Item>
      </Menu>
    </>
  );
};

export default NavMenu;
