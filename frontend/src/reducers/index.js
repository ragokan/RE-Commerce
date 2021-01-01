import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
  user: UserReducer,
  errors: ErrorReducer,
});
