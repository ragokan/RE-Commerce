import React from "react";
import Navbar from "../layout/navigation/Navbar";
import { Layout } from "antd";
import lokaly from "lokaly";
const { Content, Footer } = Layout;

const RouterContent = ({ children }) => {
  return (
    <>
      <Layout className="mainLayout">
        <Navbar />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>{lokaly("footer")}</Footer>
      </Layout>
    </>
  );
};

export default RouterContent;
