import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import resultReducer from "./reducers/resultReducer";

const combinedReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

export default combinedReducers;
