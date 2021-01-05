import React from "react";
import lokaly from "lokaly";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Button, Divider, List, Space } from "antd";
import BasketProductObject from "../../products/BasketProductObject";
import commaFunction from "../../../utils/commaFunction";
import { useHistory } from "react-router-dom";

const BasketPage = ({ products }) => {
  const history = useHistory();
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
          {`${lokaly("total")}: ${commaFunction(
            products.reduce(
              (previous, current) => previous + current.product.price * current.quantity,
              0
            )
          )}.00$`}
        </div>
        <div className="divider" />
        <Space className="floatRightBasket">
          <Button type="ghost">{lokaly("clear")}</Button>
          <Button
            type="primary"
            onClick={() => history.push("/checkout")}
            disabled={products.length < 1}
          >
            {lokaly("buy")}
          </Button>
        </Space>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.user.user.basket });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
