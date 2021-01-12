import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import lokaly from "lokaly";
import { connect } from "react-redux";
import SellerProducts from "../../seller/SellerProducts";
import AddProduct from "../../seller/AddProduct";
import GainingsPage from "../../seller/GainingsPage";
const { TabPane } = Tabs;

const SellerPage = ({ user, products }) => {
  const [currentPage, setCurrentPage] = useState("products");
  const [sellerProducts, setSellerProducts] = useState([]);
  useEffect(() => {
    setSellerProducts(products.filter((product) => product.seller === user._id));
  }, [products, user]);
  return (
    <div className="container-fluid">
      <Tabs
        defaultActiveKey="products"
        activeKey={currentPage}
        onChange={(key) => setCurrentPage(key)}
      >
        <TabPane tab={lokaly("products")} key="products">
          <SellerProducts products={sellerProducts} />
        </TabPane>
        <TabPane tab={lokaly("addProduct")} key="addProduct">
          <AddProduct setCurrentPage={setCurrentPage} />
        </TabPane>
        <TabPane tab={lokaly("gain")} key="gain">
          <GainingsPage />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  products: state.product.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
