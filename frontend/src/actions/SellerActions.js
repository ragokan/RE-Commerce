import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const SellerAddProductAction = (product) => async (dispatch) => {
  const newProduct = await api.post(routes.sellerAddProduct, product);
  dispatch({
    type: "SELLER_ADD_PRODUCT",
    payload: newProduct.data,
  });
};
