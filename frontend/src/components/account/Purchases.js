import React from "react";
import { connect } from "react-redux";

const Purchases = ({ orders }) => {
  console.log(orders);
  return <div>Purchases</div>;
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);
