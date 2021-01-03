import React, { useState } from "react";
import { Tabs } from "antd";
import lokaly from "lokaly";
const { TabPane } = Tabs;

const SellerPage = () => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="container-fluid">
      <Tabs defaultActiveKey="products" onChange={(key) => setCurrentPage(key)}>
        <TabPane tab={lokaly("products")} key="products">
          Products
        </TabPane>
        <TabPane tab={lokaly("addProduct")} key="addProduct">
          Add Product
        </TabPane>
        <TabPane tab={lokaly("gain")} key="gain">
          Gain
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SellerPage;
