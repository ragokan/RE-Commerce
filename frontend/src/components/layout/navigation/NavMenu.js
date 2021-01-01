import { Menu } from "antd";
import lokaly from "lokaly";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { guestLinks, userLinks } from "./Links";
import { connect } from "react-redux";
import { LogoutAction } from "../../../actions/AuthActions";

const NavMenu = ({ user, mode, LogoutAction }) => {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <>
      {user ? (
        <Menu mode={mode} defaultSelectedKeys={[pathname]}>
          {userLinks.map((link) => (
            <Menu.Item key={link.path} className="linkName">
              <Link to={link.path}>{lokaly(link.name)}</Link>
            </Menu.Item>
          ))}
          <Menu.Item key={"logout"} className="linkName">
            <Link to="/" onClick={() => LogoutAction()}>
              {lokaly("logout")}
            </Link>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode={mode} defaultSelectedKeys={[pathname]}>
          {guestLinks.map((link) => (
            <Menu.Item key={link.path} className="linkName">
              <Link to={link.path}>{lokaly(link.name)}</Link>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = { LogoutAction };

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
