import { Divider } from "antd";
import React from "react";

const ProductReviews = ({ product }) => {
  return (
    <>
      <Divider orientation="left">Reviews</Divider>
      {product.reviews.length < 1 ? <h4>{"No reviews yet."}</h4> : <> </>}
    </>
  );
};

export default ProductReviews;
