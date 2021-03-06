import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { GetOneProductAction, FavoriteProductAction } from "../../actions/ProductActions";
import { Card, Row, Col, Divider, Button } from "antd";
import commaFunction from "../../utils/commaFunction";
import { AddProductAction, RemoveProductAction } from "../../actions/ProductActions";
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import BasketIcons from "./BasketIcons";
import ProductReviews from "./ProductReviews";

const DetailedProductView = ({
  user,
  AddProductAction,
  RemoveProductAction,
  FavoriteProductAction,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [basket, setBasket] = useState([]);
  const [itemExists, setItemExists] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [haveFavorite, setHaveFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => await GetOneProductAction(id);
    fetchProduct().then((product) => {
      setProduct(product);
    });
  }, [id]);

  useEffect(() => {
    if (!user) {
      setBasket([]);
      setItemExists(false);
    } else setBasket(user.basket);
  }, [user]);
  useEffect(() => {
    let index = basket && basket.findIndex((item) => item.product._id === product._id);
    setItemExists(index === -1 ? false : true);
    setItemCount(index === -1 ? 0 : basket[index].quantity);
  }, [basket, product]);

  useEffect(() => {
    if (!product || !product.favorites || !user) return;
    let index = product.favorites.findIndex((item) => item === user._id);
    if (index !== -1) setHaveFavorite(true);
    else setHaveFavorite(false);
  }, [product, user]);

  const favoriteProduct = async () => {
    const data = await FavoriteProductAction(product._id);
    setProduct({ ...product, favorites: data.favorites });
  };

  let itemDoesntExistsOnBasket = () =>
    user && [
      <ShoppingCartOutlined title="Add To Basket!" onClick={() => AddProductAction(product._id)} />,
    ];
  let itemExistsOnBasket = () => [
    <MinusOutlined title="-1" onClick={() => RemoveProductAction(product._id)} />,
    itemCount,
    <PlusOutlined title="+1" onClick={() => AddProductAction(product._id)} />,
  ];

  return (
    <div className="container-fluid">
      <Card bordered>
        {Object.keys(product).length > 0 && (
          <>
            <Row gutter={{ xs: 6, sm: 6, md: 12, lg: 12, xl: 12 }}>
              <Col className="gutter-row cardItem" span={12}>
                <img src={product.image} alt="productimage" className="productDetailedImage" />
              </Col>
              <Col className="gutter-row cardItem" span={12}>
                <Card
                  title={product.name}
                  bordered
                  actions={itemExists ? itemExistsOnBasket() : itemDoesntExistsOnBasket()}
                >
                  <p>{product.description}</p>
                  <Divider />
                  <div className="float-left">
                    <p>Stock : {product.stockCount}</p>
                  </div>
                  <div className="float-right">
                    <p>{commaFunction(product.price)}$</p>
                  </div>
                  <Divider />
                  <div className="productDetailsIcons float-left">
                    <BasketIcons item={{ product }} />
                  </div>
                  <div className="float-right">
                    <Button type="dashed" onClick={favoriteProduct}>
                      {haveFavorite ? "Remove From Favorites" : "Add To Favorites"}
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </>
        )}
        <ProductReviews product={product} user={user} setProduct={setProduct} />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = { AddProductAction, RemoveProductAction, FavoriteProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(DetailedProductView);
