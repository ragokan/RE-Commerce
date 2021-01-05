import React from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const columns = [
  {
    title: "Products",
    dataIndex: "products",
    render: (products) =>
      products.map((item) => (
        <div>
          <Link to={`/product/${item.product._id}`} key={item.product._id}>
            {item.product.name} * {item.quantity}
          </Link>
        </div>
      )),
  },
  {
    title: "Order Date",
    dataIndex: "createdAt",
    render: (date) => moment(date).format("DD MMMM YYYY HH:mm:ss"),
  },
  {
    title: "Delivered",
    dataIndex: "delivered",
    render: (delivered) => (delivered ? "True" : "False"),
  },
  {
    title: "Cargo Location",
    dataIndex: "cargoLocation",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
  },
  {
    title: "Address",
    children: [
      {
        title: "Country",
        dataIndex: "country",
      },
      {
        title: "City",
        dataIndex: "city",
      },
      {
        title: "Description",
        dataIndex: "description",
      },
    ],
  },
];

const Purchases = ({ orders }) => {
  orders.map((item) => {
    item.city = item.address.city;
    item.country = item.address.country;
    item.description = item.address.description;
    return item;
  });

  return (
    <>
      <Table
        columns={columns}
        dataSource={orders}
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
