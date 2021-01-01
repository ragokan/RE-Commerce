import api from "../utils/api";
import * as routes from "../utils/urlRoutes";

export const GetUserInfoAction = (token = localStorage.getItem("authToken")) => async (
  dispatch
) => {
  if (!token) return;
  try {
    api.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("authToken", token);
    const { data } = await api.get(routes.userInfoRoute);
    dispatch({
      type: "FETCH_USER",
      payload: data,
    });
  } catch (error) {
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGIN_ERROR" });
  }
};

export const LoginAction = (account) => async (dispatch) => {
  const { data } = await api.post(routes.loginRoute, account);
  dispatch(GetUserInfoAction(data));
  dispatch({
    type: "ADD_TOKEN",
    payload: data,
  });
};

export const LogoutAction = () => async (dispatch) => {
  await api.post(routes.logoutRoute);
  localStorage.removeItem("authToken");
  dispatch({ type: "LOGOUT_USER" });
};
