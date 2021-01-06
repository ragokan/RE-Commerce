import React, { useEffect, useState } from "react";
import lokaly from "lokaly";
import { Button, Divider, Dropdown, Menu, Pagination, Row } from "antd";
import ProductObject from "../../products/ProductObject";
import paginate from "../../../utils/PaginateFunction";
import { connect } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import categories from "../../../utils/categories";

const HomePage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Products");

  const menu = (
    <Menu selectedKeys={[currentCategory]} defaultSelectedKeys={[currentCategory]}>
      <Menu.Item key={"All Products"} onClick={() => setCurrentCategory("All Products")}>
        All Products
      </Menu.Item>
      {categories.map((category) => (
        <Menu.Item key={category} onClick={() => setCurrentCategory(category)}>
          {category}
        </Menu.Item>
      ))}
    </Menu>
  );

  useEffect(() => {
    let filteredProducts =
      currentCategory === "All Products"
        ? products
        : products.filter((product) => product.category === currentCategory);
    setCurrentItems(
      paginate(
        filteredProducts.filter((product) => product.stockCount > 0),
        12,
        currentPage
      )
    );
  }, [currentPage, products, currentCategory]);

  return (
    <>
      <div className="block lessMarginTop">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("newest")}</h2>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button>
                {currentCategory} <DownOutlined />
              </Button>
            </Dropdown>
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
