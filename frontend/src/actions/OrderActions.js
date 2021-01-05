import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const FetchOrders = () => async (dispatch) => {
  const { data } = await api.get(routes.orderRoute);
  dispatch({
    type: "FETCH_ORDERS",
    payload: data,
  });
};
