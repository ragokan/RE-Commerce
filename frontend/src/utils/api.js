import axios from "axios";
import store from "../store";
// import { AddErrorAction } from "../actions/ErrorActions";
// import { SetLoading } from "../actions/LoadingActions";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   store.dispatch(SetLoading(true));
//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     store.dispatch(SetLoading(false));
//     return response;
//   },
//   (error) => {
//     store.dispatch(SetLoading(false));
//     if (error.response) {
//       store.dispatch(AddErrorAction(error.response.data.resultMessage.en, "danger"));
//       console.log(error.response.data.resultMessage.en);
//     }
//     throw new axios.Cancel("Error happened!");
//   }
// );

export default api;
