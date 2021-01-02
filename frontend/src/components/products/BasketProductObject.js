import React from "react";
import { List, Avatar } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { AddProductAction, RemoveProductAction } from "../../actions/ProductActions";
import { connect } from "react-redux";
import BasketIcons from "./BasketIcons";
import { Link } from "react-router-dom";

const BasketProductObject = ({ item, AddProductAction, RemoveProductAction }) => {
  let itemActions = () => [
    <MinusOutlined
      className="actionButton"
      title="-1"
      onClick={() => RemoveProductAction(item.product._id)}
    />,
    item.quantity,
    <PlusOutlined
      className="actionButton"
      title="+1"
      onClick={() => AddProductAction(item.product._id)}
    />,
  ];
  return (
    <>
      <List.Item actions={itemActions()}>
        <List.Item.Meta
          avatar={<Avatar src={item.product.image} />}
          title={
            <Link to={`/product/${item.product._id}`}>
              {item.product.name} - {item.product.price}$
            </Link>
          }
          description={item.product.description}
        />{" "}
        <div className="productBasketPrice">{item.product.price * item.quantity}$</div>
        <div className="mb-2"></div>
        <BasketIcons item={item} key={item} />
      </List.Item>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = { AddProductAction, RemoveProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(BasketProductObject);
