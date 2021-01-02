import React from "react";
import lokaly from "lokaly";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { List } from "antd";
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.user.user.basket });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
