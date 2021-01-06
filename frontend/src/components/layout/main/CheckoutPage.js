import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Card, Form } from "antd";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { CreateNewPayment } from "../../../actions/PaymentActions";
import { useHistory } from "react-router-dom";
import CheckoutValues from "../payment/CheckoutValues";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const CheckoutPage = ({ CreateNewPayment, loading, products }) => {
  const history = useHistory();
  const elements = useElements();
  const stripe = useStripe();
  const [paymentForm] = Form.useForm();
  const onFinish = async (values) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement("card"),
    });

    if (!error) {
      const result = await CreateNewPayment({
        paymentToken: paymentMethod.id,
        address: { ...values },
      });
      if (result.success) history.push("/checkoutSuccess/" + result.newOrder._id);
    }
  };
  return (
    <>
      <Helmet>
        <title>R/E-Commerce - Checkout</title>
      </Helmet>
      <div className="container-fluid">
        <Card title="Checkout" style={{ maxWidth: 550, margin: "auto" }}>
          <Form
            name="basic"
            onFinish={onFinish}
            className="productForm"
            form={paymentForm}
            {...layout}
          >
            <CheckoutValues loading={loading} products={products}>
              <CardElement options={{ hidePostalCode: true }} />
            </CheckoutValues>
          </Form>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ loading: state.loading, products: state.user.user.basket });

const mapDispatchToProps = { CreateNewPayment };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
