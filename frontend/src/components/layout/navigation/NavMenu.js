import { Menu } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { guestLinks, userLinks } from "./Links";

const NavMenu = ({ mode }) => {
  const {
    location: { pathname },
  } = useHistory();
  let user = false;
  return (
    <>
      {user ? (
        <Menu mode={mode} defaultSelectedKeys={[pathname]}>
          {userLinks.map((link) => (
            <Menu.Item key={link.path} className="linkName">
              <Link to={link.path}>{link.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      ) : (
        <Menu mode={mode} defaultSelectedKeys={[pathname]}>
          {guestLinks.map((link) => (
            <Menu.Item key={link.path} className="linkName">
              <Link to={link.path}>{link.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavMenu;
