import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { StarOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BasketIcons = ({ item }) => {
  const [starAmount, setStarAmount] = useState(0);
  useEffect(() => {
    let length = item.product.reviews.length;
    if (length === 0) return setStarAmount(0);

    let starCount = item.product.reviews.reduce((prev, current) => prev + current.rating, 0);
    setStarAmount(starCount / length);
  }, [item]);

  return (
    <span className="basketIcons">
      <IconText icon={StarOutlined} text={starAmount} key="list-vertical-star-o" />
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
