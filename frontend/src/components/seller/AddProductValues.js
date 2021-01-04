import React from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import categories from "../../utils/categories";

const { Option } = Select;
const { TextArea } = Input;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const normFile = (e) => {
  if (Array.isArray(e)) return e;
  return e && e.fileList;
};

const AddProductValues = () => {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter a valid name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter a price that higher than 0!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please enter  a valid image!" }]}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          transformFile={() => {}}
          listType="picture"
          customRequest={({ file, onSuccess }) => onSuccess("ok")}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: "Please enter a valid brand!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Stock Count"
        name="stockCount"
        rules={[{ required: true, message: "Please enter a stock that higher or equal to 0!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please enter a valid description!" }]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please enter a valid category!" }]}
      >
        <Select>
          {categories.map((category, index) => (
            <Option key={index} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </>
  );
};

export default AddProductValues;
