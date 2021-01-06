import api from "../utils/api";
import * as routes from "../utils/urlRoutes";
import { FetchProductsAction } from "./ProductActions";
import { GetUserInfoAction } from "./AuthActions";

export const CreateNewPayment = (body) => async (dispatch) => {
  const { data } = await api.post(routes.paymentRoute, body);
  // newOrder, user
  // dispatch({
  //   type: "FETCH_USER",
  //   payload: data.user,
  // });

  dispatch({
    type: "ADD_ORDER",
    payload: data.newOrder,
  });

  dispatch(FetchProductsAction());
  dispatch(GetUserInfoAction());
  return data;
};
