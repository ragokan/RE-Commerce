import React from "react";
import { Card, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
const { Meta } = Card;

const SellersProduct = ({ product }) => {
  return (
    <>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={8}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="productimage" src={product.image} className="productImage" />}
          actions={[<EditOutlined />, <DeleteOutlined />]}
        >
          <Meta
            title={product.name}
            description={product.description}
            avatar={product.price + "$"}
          />
        </Card>
      </Col>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SellersProduct);
