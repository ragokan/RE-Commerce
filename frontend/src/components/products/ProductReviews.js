import { Divider } from "antd";
import React, { useEffect, useState } from "react";

const ProductReviews = ({ user, product }) => {
  const [canAddReview, setCanAddReview] = useState(false);

  useEffect(() => {
    const index = user.purchasedProducts.findIndex((item) => item === product._id);
    if (index !== -1) setCanAddReview(true);
  }, [user.purchasedProducts, product._id]);

  return (
    <>
      <Divider orientation="left">Reviews</Divider>
      {product?.reviews?.length < 1 ? <h4>{"No reviews yet."}</h4> : <> </>}
      {canAddReview && "Add"}
    </>
  );
};

export default ProductReviews;
