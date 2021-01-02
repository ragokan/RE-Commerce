import React from "react";
import lokaly from "lokaly";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Button, Divider, List, Space } from "antd";
import BasketProductObject from "./BasketProductObject";

const BasketPage = ({ products }) => {
  return (
    <>
      <Helmet>
        <title>R/E-Commerce - Basket</title>
      </Helmet>
      <div className="container-fluid">
        <List
          itemLayout="horizontal"
          header={<h2>{lokaly("basket")}</h2>}
          dataSource={products}
          renderItem={(item) => <BasketProductObject item={item} />}
        />
        <Divider />
        <div className="floatRightBasket basketTitle">
          {`${lokaly("total")}: ${products.reduce(
            (previous, current) => previous + current.product.price * current.quantity,
            0
          )}$`}
        </div>
        <div className="divider" />
        <Space className="floatRightBasket">
          <Button type="ghost">{lokaly("clear")}</Button>
          <Button type="primary">{lokaly("buy")}</Button>
        </Space>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.user.user.basket });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
