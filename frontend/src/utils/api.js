import axios from "axios";
import store from "../store";
import { AddErrorAction } from "../actions/ErrorActions";
import { SetLoading } from "../actions/LoadingActions";
import lokaly from "lokaly";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  store.dispatch(SetLoading(true));
  if (!config.headers["Authorization"]) {
    const token = localStorage.getItem("authToken");
    if (token) config.headers["Authorization"] = token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    store.dispatch(SetLoading(false));
    return response;
  },
  async (error) => {
    store.dispatch(SetLoading(false));
    let errorMessage = error.response.data.translateCode
      ? lokaly(String(`${error.response.data.translateCode}`))
      : error.response.data.message;
    if (error.response) {
      store.dispatch(AddErrorAction(errorMessage, "error"));
    }
    throw new axios.Cancel("Error happened!");
  }
);

export default api;
