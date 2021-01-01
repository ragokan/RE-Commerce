import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const LoginAction = (account) => async (dispatch) => {
  const { data } = await api.post(routes.loginRoute, account);
  console.log(data);
};
