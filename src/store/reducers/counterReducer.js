import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return updateObject(state, { counter: state.counter + 1 });
  } else if (action.type === actionTypes.DECREMENT) {
    return updateObject(state, { counter: state.counter - 1 });
  } else if (action.type === actionTypes.ADD) {
    return updateObject(state, {
      counter: state.counter + action.payload.value
    });
  } else if (action.type === actionTypes.SUBSTRACT) {
    return updateObject(state, {
      counter: state.counter - action.payload.value
    });
  }
  return state;
};

export default counterReducer;
