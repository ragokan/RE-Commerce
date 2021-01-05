import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const FetchProductsAction = () => async (dispatch) => {
  const { data } = await api.get(routes.getAllProducts);
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: data,
  });
};

export const GetOneProductAction = async (id) => {
  const { data } = await api.get(routes.getOneProduct(id));
  return data;
};

export const AddProductAction = (product) => async (dispatch) => {
  const { data } = await api.post(routes.addProduct, { product });
  dispatch({
    type: "UPDATE_BASKET",
    payload: data,
  });
};

export const RemoveProductAction = (product) => async (dispatch) => {
  const { data } = await api.post(routes.removeProduct, { product });
  dispatch({
    type: "UPDATE_BASKET",
    payload: data,
  });
};
