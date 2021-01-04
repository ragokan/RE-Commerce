import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { AddErrorAction } from "../../actions/ErrorActions";
import { SellerUpdateProductAction } from "../../actions/SellerActions";
import { Form, Card } from "antd";
import AddProductValues from "./ProductValuesForm";
import { storage } from "../../firebase/Config";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const UpdateProduct = ({ products, SellerUpdateProductAction }) => {
  const { id } = useParams();
  const history = useHistory();
  const product = products?.find((item) => item._id === id);
  const [productForm] = Form.useForm();

  useEffect(() => {
    if (!product) return;
    productForm.setFieldsValue({
      name: product.name,
      price: product.price,
      brand: product.brand,
      stockCount: product.stockCount,
      description: product.description,
      category: product.category,
    });
  }, [productForm, product]);

  const onFinish = (values) => {
    let imageToUpload = values.image ? values.image[0].originFileObj : null;
    if (imageToUpload !== null) {
      const storageRef = storage.ref(imageToUpload.name);
      storageRef.put(imageToUpload).on(
        "state_changed",
        (_) => {},
        (err) => AddErrorAction(err, "error"),
        async () => {
          const url = await storageRef.getDownloadURL();

          const updatedProduct = {
            ...values,
            image: url,
          };

          SellerUpdateProductAction(id, updatedProduct);

          history.push("/seller");
        }
      );
    } else {
      const updatedProduct = {
        ...values,
        image: product.image,
      };
      SellerUpdateProductAction(id, updatedProduct);
      history.push("/seller");
    }
  };
  return (
    <Card title={`Update Product ${product.name}`} style={{ width: "100%" }}>
      <Form name="basic" onFinish={onFinish} className="productForm" form={productForm} {...layout}>
        <div className="productImageInUpdate">
          <h2>Current Image</h2>
          <img src={product.image} alt="ProductImage" className="maxHeightForImage" />
        </div>
        <AddProductValues formType={"update"} />
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = { AddErrorAction, SellerUpdateProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
