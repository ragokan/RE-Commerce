import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";
import LoadingReducer from "./LoadingReducer";
import ProductReducer from "./ProductReducer";

export default combineReducers({
  user: UserReducer,
  errors: ErrorReducer,
  loading: LoadingReducer,
  product: ProductReducer,
});
