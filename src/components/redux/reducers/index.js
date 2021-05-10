import { combineReducers } from "redux";
import auth from "./authReducer";
import notify from "./notifyReducer";
import authAppli from "./authAppliReducer";

export default combineReducers({
  auth,
  authAppli,
  notify,
});
