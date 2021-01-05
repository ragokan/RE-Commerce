import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { GetOneProductAction } from "../../actions/ProductActions";

const DetailedProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => await GetOneProductAction(id);
    fetchProduct().then((product) => setProduct(product));
  }, [id]);

  return Object.keys(product).length > 0 ? <></> : <>Product is loading</>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedProductView);
