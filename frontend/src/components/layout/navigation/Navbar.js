import React, { useState } from "react";
import { Button, Drawer, Layout } from "antd";
import basket from "../../../resources/basket.png";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Header>
        <div className="container-fluid">
          <div className="header">
            <Link to="/" className="logo">
              <img src={basket} alt="basketImg" className="basketImg" />
              <span className="reCommerceText"> R/E-Commerce</span>
            </Link>
            <div className="mobileHidden">
              <NavMenu mode={"horizontal"} />
            </div>
            <div className="mobileVisible">
              <Button type="primary" onClick={showDrawer}>
                <i className="fas fa-bars" />
              </Button>
              <Drawer
                title="R/E-Commerce Menu"
                placement="right"
                onClose={onClose}
                visible={visible}
                getContainer={false}
              >
                <NavMenu mode={"vertical"} />
              </Drawer>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
