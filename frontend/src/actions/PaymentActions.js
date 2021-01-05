import api from "../utils/api";
import * as routes from "../utils/urlRoutes";
// import { AddErrorAction } from "./ErrorActions";

export const CreateNewPayment = (body) => async (dispatch) => {
  const { data } = await api.post(routes.paymentRoute, body);
  return data;
};
