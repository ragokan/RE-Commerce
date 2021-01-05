import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import HomePage from "../layout/main/HomePage";
import AccountPage from "../layout/main/AccountPage";
import SellerPage from "../layout/main/SellerPage";
import NotAuthorizedPage from "./NotAuthorizedPage";
import UpdateProduct from "../seller/UpdateProduct";
import CheckoutPage from "../layout/main/CheckoutPage";
import BasketPage from "../layout/main/BasketPage";
import { loadStripe } from "@stripe/stripe-js";
import { stripePublicKey } from "../../utils/publicKeys";
import { Elements } from "@stripe/react-stripe-js";
import DetailedProductView from "../products/DetailedProductView";
const stripePromise = loadStripe(stripePublicKey);

const Routes = ({ user }) => {
  return (
    <>
      <Route exact path="/login" component={Login}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/register" component={Register}>
        {user && <Redirect to="/" />}
      </Route>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={DetailedProductView} />
      <PrivateRoute exact path="/basket" component={BasketPage} />
      <PrivateRoute exact path="/account" component={AccountPage} />
      <PrivateRoute exact path="/seller" component={SellerPage}>
        {user && user.type === "user" && <NotAuthorizedPage />}
      </PrivateRoute>
      <PrivateRoute exact path="/updateProduct/:id" component={UpdateProduct} />
      <Elements stripe={stripePromise}>
        <PrivateRoute exact path="/checkout" component={CheckoutPage}>
          {user && user.basket.length < 1 && <Redirect to="basket" />}
        </PrivateRoute>
      </Elements>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
