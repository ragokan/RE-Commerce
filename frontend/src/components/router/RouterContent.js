import React from "react";
import Navbar from "../layout/navigation/Navbar";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const RouterContent = () => {
  return (
    <>
      <Layout className="mainLayout">
        <Navbar />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            {/* CONTENT HERE */}
            {/* CONTENT HERE */}
            {/* CONTENT HERE */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          R/E-Commerce by Okan YILDIRIM (ragokan) - Uses Ant Design
        </Footer>
      </Layout>
    </>
  );
};

export default RouterContent;
