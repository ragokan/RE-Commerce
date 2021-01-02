import { Badge, Menu, Popover } from "antd";
import lokaly from "lokaly";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { guestLinks, userLinks } from "./Links";
import { connect } from "react-redux";
import { LogoutAction } from "../../../actions/AuthActions";

const NavMenu = ({ user, mode, LogoutAction }) => {
  const {
    location: { pathname },
  } = useHistory();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    user &&
      user.basket &&
      setQuantity(user.basket.reduce((total, current) => total + current.quantity, 0));
  }, [user]);

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

          <Menu.Item key={"basket"} className="linkName">
            <Popover title="Basket" placement="bottom">
              <Link to="/basket">
                <Badge count={quantity} className="badge">
                  <i className="fas fa-shopping-cart" />
                </Badge>
              </Link>
            </Popover>
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
