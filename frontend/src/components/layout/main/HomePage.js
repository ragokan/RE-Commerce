import React, { useEffect, useState } from "react";
import lokaly from "lokaly";
import { Col, Divider, Pagination, Row } from "antd";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

let items = [];
for (let i = 1; i < 105; i++) {
  items.push(i);
}

const paginate = (array, page_size, page_number) =>
  array.slice((page_number - 1) * page_size, page_number * page_size);

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  useEffect(
    () => {
      setCurrentItems(paginate(items, 12, currentPage));
    },
    /*eslint-disable*/ [currentPage]
  );

  return (
    <>
      <div className="block lessMarginTop">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("popular")}</h2>
          </div>

          <div className="productContainer">
            <Row gutter={16} justify="center" className="productRows">
              {currentItems.map((item, index) => (
                <Col className="gutter-row" span={6} key={index} xs={24} sm={24} md={12} lg={8}>
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<ShoppingCartOutlined title="Add" />]}
                  >
                    <Meta title={item} description="This is the description" />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <br />
          <Divider orientation="left"></Divider>
          <Pagination
            defaultCurrent={currentPage}
            total={(items.length / 12) * 10}
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

export default HomePage;
