import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { List } from "antd";
import { Link } from "react-router-dom";

const Favorites = ({ products, user }) => {
  const [favoritedProducts, setFavoritedProducts] = useState([]);
  useEffect(() => {
    if (!user || !products) return;
    setFavoritedProducts([]);
    products.forEach((product) =>
      product.favorites.forEach(
        (item) =>
          item === user &&
          setFavoritedProducts((previousProducts) => [product, ...previousProducts])
      )
    );
  }, [products, user]);
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={favoritedProducts}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/product/${item._id}`}>{item.name}</Link>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  user: state.user.user._id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
