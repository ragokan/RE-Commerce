import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchOrders } from "../../actions/OrderActions";

const Purchases = ({ orders, FetchOrders }) => {
  useEffect(() => {
    FetchOrders();
  }, [FetchOrders]);
  return <div>Purchases</div>;
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
});

const mapDispatchToProps = { FetchOrders };

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);
