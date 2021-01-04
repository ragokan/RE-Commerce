import React, { useState } from "react";
import AddProductValues from "./AddProductValues";
import { Form, Card } from "antd";
import { storage } from "../../firebase/Config";
import { connect } from "react-redux";
import { AddErrorAction } from "../../actions/ErrorActions";
import { SellerAddProductAction } from "../../actions/SellerActions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddProduct = ({ setCurrentPage, AddErrorAction, SellerAddProductAction }) => {
  const [productForm] = Form.useForm();

  const onFinish = (values) => {
    let imageToUpload = values.image[0].originFileObj;
    const storageRef = storage.ref(imageToUpload.name);

    storageRef.put(imageToUpload).on(
      "state_changed",
      (_) => {},
      (err) => AddErrorAction(err, "error"),
      async () => {
        const url = await storageRef.getDownloadURL();
        const newProduct = {
          ...values,
          image: url,
        };

        SellerAddProductAction(newProduct);
        productForm.resetFields();
        setCurrentPage("products");
      }
    );
  };
  return (
    <Card title="Add Product" style={{ width: "100%" }}>
      <Form name="basic" onFinish={onFinish} className="productForm" form={productForm} {...layout}>
        <AddProductValues />
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { AddErrorAction, SellerAddProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
