import React from "react";
import { Space } from "antd";
import { StarOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BasketIcons = ({ item }) => {
  return (
    <span className="basketIcons">
      <IconText
        icon={StarOutlined}
        text={item.product.favorites.length}
        key="list-vertical-star-o"
      />
      <IconText icon={UserOutlined} text={item.product.totalSellAmount} key="list-v" />
      <IconText
        icon={MessageOutlined}
        text={item.product.reviews.length}
        key="list-vertical-star"
      />
    </span>
  );
};

export default BasketIcons;
