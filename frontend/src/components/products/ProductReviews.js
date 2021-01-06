import { Card, Divider, Form, Input, Button, Rate } from "antd";
import React, { useEffect, useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 16 },
};

const ProductReviews = ({ user, product }) => {
  const [canAddReview, setCanAddReview] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  useEffect(() => {
    if (!user) return;
    const index = user.purchasedProducts.findIndex((item) => item === product._id);
    if (index !== -1) setCanAddReview(true);
  }, [user, product._id]);

  return (
    <>
      <Divider orientation="left">Reviews</Divider>
      {product?.reviews?.length < 1 ? <h4>{"No reviews yet."}</h4> : <> </>}
      {canAddReview && (
        <Card bordered title="Add Review">
          <Form {...layout} onFinish={onFinish}>
            <Form.Item
              label="Rate"
              name="rate"
              rules={[{ required: true, message: "Please give a rate." }]}
              initialValue={3}
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
      )}
    </>
  );
};

export default ProductReviews;
