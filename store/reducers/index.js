import { combineReducers } from "redux";

import transactionReducer from "./transactionReducers";

export default combineReducers({
  trs: transactionReducer,
});
