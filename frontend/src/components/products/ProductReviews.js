import { Card, Divider, Form, Input, Button, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddReviewToProductAction } from "../../actions/ProductActions";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 16 },
};

const ProductReviews = ({ user, product, AddReviewToProductAction, setProduct }) => {
  const [canAddReview, setCanAddReview] = useState(false);
  const [userAlreadyReviewed, setUserAlreadyReviewed] = useState(false);
  const [counter, setCounter] = useState(0);

  const onFinish = async (values) => {
    const newReview = {
      rating: values.rate,
      text: values.details,
    };
    const updatedProduct = await AddReviewToProductAction(product._id, newReview);
    setProduct((prevProduct) => ({ ...prevProduct, reviews: updatedProduct.reviews }));
    setCanAddReview(false);
    setUserAlreadyReviewed(true);
  };

  useEffect(() => {
    const checker = async () => {
      if (!user) return;
      if (!product) return;
      if (!product.reviews) return;
      if (counter > 0) return;
      setCounter((prevCount) => prevCount + 1);

      const productCheck = await product.reviews.findIndex(
        (item) => String(item.user._id) === String(user._id)
      );

      if (productCheck !== -1) {
        setCanAddReview(false);
        setUserAlreadyReviewed(true);
      } else {
        const index = await user.purchasedProducts.findIndex((item) => item === product._id);
        if (index !== -1) setCanAddReview(true);
      }
    };
    checker();
  }, [user, product]);

  return (
    <>
      <Divider orientation="left">Reviews</Divider>
      {product?.reviews?.length < 1 ? <h4>{"No reviews yet."}</h4> : <> </>}
      {!userAlreadyReviewed && canAddReview ? (
        <Card bordered title="Add Review">
          <Form {...layout} onFinish={onFinish}>
            <Form.Item
              label="Rate"
              name="rate"
              rules={[{ required: true, message: "Please give a rate." }]}
            >
              <Rate allowClear={false} />
            </Form.Item>

            <Form.Item
              label="Details"
              name="details"
              rules={[{ required: true, message: "Please give details." }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <>
          <h4>
            {userAlreadyReviewed
              ? "You already reviewed this product"
              : "To add review, you have to buy it."}
          </h4>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { AddReviewToProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);
