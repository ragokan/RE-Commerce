import React from "react";
import { List, Avatar } from "antd";
import lokaly from "lokaly";
import commaFunction from "../../../utils/commaFunction";

const ProductList = ({ products }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={products}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.product.image} />}
            title={<p>{item.product.name}</p>}
            description={`${item.product.price}$ * ${item.quantity} = ${
              item.product.price * item.quantity
            }$`}
          />
        </List.Item>
      )}
      footer={
        <div className="popoverListFooter">{`${lokaly("total")}: ${commaFunction(
          products.reduce(
            (previous, current) => previous + current.product.price * current.quantity,
            0
          )
        )}.00$`}</div>
      }
    />
  );
};

export default ProductList;
