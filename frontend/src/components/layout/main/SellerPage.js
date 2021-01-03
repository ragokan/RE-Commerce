import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import lokaly from "lokaly";
import { connect } from "react-redux";
import SellerProducts from "../../seller/SellerProducts";
const { TabPane } = Tabs;

const SellerPage = ({ user, products }) => {
  const [currentPage, setCurrentPage] = useState("");
  const [sellerProducts, setSellerProducts] = useState([]);
  useEffect(() => {
    setSellerProducts(products.filter((product) => product.seller === user._id));
  }, [products, user]);
  return (
    <div className="container-fluid">
      <Tabs defaultActiveKey="products" onChange={(key) => setCurrentPage(key)}>
        <TabPane tab={lokaly("products")} key="products">
          <SellerProducts products={sellerProducts} />
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

const mapStateToProps = (state) => ({
  user: state.user.user,
  products: state.product.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
