import React, { useEffect, useState } from "react";
import { Card, Col } from "antd";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
const { Meta } = Card;

const ProductObject = ({ product, user }) => {
  const [basket, setBasket] = useState([]);
  const [itemExists, setItemExists] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    if (!user) return;
    setBasket(user.basket);
  }, [user]);
  useEffect(() => {
    let index = basket && basket.findIndex((item) => item.product === product._id);
    setItemExists(index === -1 ? false : true);
    setItemCount(index === -1 ? 0 : basket[index].quantity);
  }, [basket, product]);
  let itemDoesntExistsOnBasket = () => [<ShoppingCartOutlined title="Add To Basket!" />];
  let itemExistsOnBasket = () => [
    <MinusOutlined title="-1" />,
    itemCount,
    <PlusOutlined title="+1" />,
  ];

  return (
    <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={8}>
      <Card
        style={{ width: 300 }}
        cover={<img alt="productimage" src={product.image} className="productImage" />}
        actions={itemExists ? itemExistsOnBasket() : itemDoesntExistsOnBasket()}
      >
        <Meta title={product.name} description={product.description} avatar={product.price + "$"} />
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductObject);
