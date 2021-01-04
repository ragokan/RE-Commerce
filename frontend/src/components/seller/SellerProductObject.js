import React from "react";
import { Card, Col, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SellerDeleteProductAction } from "../../actions/SellerActions";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const SellersProduct = ({ product, SellerDeleteProductAction }) => {
  let history = useHistory();
  return (
    <>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={8}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="productimage" src={product.image} className="productImage" />}
          actions={[
            <EditOutlined onClick={() => history.push(`/updateProduct/${product._id}`)} />,
            <Popconfirm
              title={`Are you really sure to delete the product: ${product.name} ?`}
              okText="Yes"
              cancelText="No"
              onConfirm={() => SellerDeleteProductAction(product._id)}
            >
              <DeleteOutlined />
            </Popconfirm>,
          ]}
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

const mapDispatchToProps = { SellerDeleteProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(SellersProduct);
