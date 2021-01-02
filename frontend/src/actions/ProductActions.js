import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const FetchProductsAction = () => async (dispatch) => {
  const { data } = await api.get(routes.getAllProducts);
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: data,
  });
};
