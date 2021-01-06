import React, { useEffect, useState } from "react";
import lokaly from "lokaly";
import { Divider, Pagination, Row } from "antd";
import ProductObject from "../../products/ProductObject";
import paginate from "../../../utils/PaginateFunction";
import { connect } from "react-redux";

const HomePage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  useEffect(() => {
    setCurrentItems(
      paginate(
        products.filter((product) => product.stockCount > 0),
        12,
        currentPage
      )
    );
  }, [currentPage, products]);

  return (
    <>
      <div className="block lessMarginTop">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("newest")}</h2>
          </div>

          <div className="productContainer">
            <Row gutter={16} justify="center" className="productRows">
              {currentItems.map((item, index) => (
                <ProductObject product={item} key={index} />
              ))}
            </Row>
          </div>
          <br />
          <Divider orientation="left"></Divider>
          <Pagination
            defaultCurrent={currentPage}
            total={(products.length / 12) * 10}
            showSizeChanger={false}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            className="pagination"
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.product.products });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
