import React from "react";
import { Row } from "antd";
import SellerProductObject from "./SellerProductObject";

const SellerProducts = ({ products }) => {
  return (
    <>
      <div className="productContainer">
        <Row gutter={16} justify="center" className="productRows">
          {products.map((item, index) => (
            <SellerProductObject product={item} key={index} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default SellerProducts;
