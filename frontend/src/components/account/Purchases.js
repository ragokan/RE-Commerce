import React from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import columns from "../../utils/purchaseColumns";

const Purchases = ({ orders }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={orders.slice(0).reverse()}
        bordered
        size="large"
        pagination={{ pageSize: 10 }}
        scroll={{ x: "calc(700px + 50%)" }}
        rowKey="_id"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);
