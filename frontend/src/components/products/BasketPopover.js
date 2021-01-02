import { Popover } from "antd";
import lokaly from "lokaly";
import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";

const BasketPopover = ({ children, products }) => {
  const content = () => (
    <List
      itemLayout="horizontal"
      dataSource={products}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.product.image} />}
            title={<Link to={`/product/${item.product._id}`}>{item.product.name}</Link>}
            description={`${item.product.price}$ * ${item.quantity} = ${
              item.product.price * item.quantity
            }$`}
          />
        </List.Item>
      )}
      footer={
        <div className="popoverListFooter">{`${lokaly("total")}: ${products.reduce(
          (previous, current) => previous + current.product.price * current.quantity,
          0
        )}$`}</div>
      }
    />
  );

  return products ? (
    <>
      <Popover
        title={lokaly("basket")}
        placement="bottom"
        content={products.length > 0 ? content() : lokaly("noItem")}
      >
        {children}
      </Popover>
    </>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => ({ products: state.user.user.basket });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPopover);
