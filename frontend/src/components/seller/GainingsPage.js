import React, { useEffect, useState } from "react";
import { FetchAllOrders } from "../../actions/OrderActions";
import columns from "../../utils/purchaseColumns";
import { Table } from "antd";

const GainingsPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const data = await FetchAllOrders();
      setOrders(data);
    };
    fetcher();
  }, []);

  return (
    <>
      <Table
        columns={columns(true)}
        dataSource={orders.slice(0).reverse()}
        bordered
        size="large"
        pagination={{ pageSize: 10 }}
        scroll={{ x: "calc(700px + 50%)" }}
        rowKey="_id"
      />
    </>
  );
};

export default GainingsPage;
