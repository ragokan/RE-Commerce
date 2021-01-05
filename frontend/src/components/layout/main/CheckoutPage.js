import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Card, Form } from "antd";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { CreateNewPayment } from "../../../actions/PaymentActions";

const CheckoutPage = ({ CreateNewPayment, loading }) => {
  const elements = useElements();
  const stripe = useStripe();
  const [paymentForm] = Form.useForm();
  const onFinish = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement("card"),
    });

    if (!error) {
      await CreateNewPayment({ paymentToken: paymentMethod.id });
    }
  };
  return (
    <>
      <Helmet>
        <title>R/E-Commerce - Checkout</title>
      </Helmet>
      <div className="container-fluid">
        <Card title="Checkout" style={{ maxWidth: 500, margin: "auto" }}>
          <Form name="basic" onFinish={onFinish} className="productForm" form={paymentForm}>
            <CardElement options={{ hidePostalCode: true }} />
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Complete Payment!
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ loading: state.loading });

const mapDispatchToProps = { CreateNewPayment };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
