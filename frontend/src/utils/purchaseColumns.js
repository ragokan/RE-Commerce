import { Link } from "react-router-dom";
import moment from "moment";
import commaFunction from "./commaFunction";

const columns = [
  {
    title: "Products",
    dataIndex: "products",
    render: (products) =>
      products.map((item) => (
        <div>
          <Link to={`/product/${item.product._id}`} key={item.product._id}>
            {item.product.name} * {item.quantity}
          </Link>
        </div>
      )),
  },
  {
    title: "Order Date",
    dataIndex: "createdAt",
    render: (date) => moment(date).format("DD MMMM YYYY HH:mm:ss"),
  },
  {
    title: "Delivered",
    dataIndex: "delivered",
    render: (delivered) => (delivered ? "True" : "False"),
  },
  {
    title: "Cargo Location",
    dataIndex: "cargoLocation",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    render: (amount) => commaFunction(amount) + "$",
  },
  {
    title: "Address",
    children: [
      {
        title: "Country",
        dataIndex: "address",
        render: (address) => address.country,
      },
      {
        title: "City",
        dataIndex: "address",
        render: (address) => address.city,
      },
      {
        title: "Description",
        dataIndex: "address",
        render: (address) => address.description,
      },
    ],
  },
];

export default columns;
