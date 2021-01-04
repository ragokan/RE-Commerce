import api from "../utils/api";
import * as routes from "../utils/urlRoutes";
import { AddErrorAction } from "./ErrorActions";

export const SellerAddProductAction = (product) => async (dispatch) => {
  const newProduct = await api.post(routes.sellerAddProduct, product);
  dispatch({
    type: "SELLER_ADD_PRODUCT",
    payload: newProduct.data,
  });
};

export const SellerDeleteProductAction = (id) => async (dispatch) => {
  await api.delete(routes.sellerDeleteProduct(id));
  dispatch(AddErrorAction("Product is removed completely!", "warning"));
  dispatch({
    type: "SELLER_REMOVE_PRODUCT",
    payload: id,
  });
};

export const SellerUpdateProductAction = (id, product) => async (dispatch) => {
  const { data } = await api.patch(routes.sellerUpdateProduct(id), product);

  dispatch({
    type: "SELLER_UPDATE_PRODUCT",
    payload: data,
  });
};
