import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return updateObject(state, {
      results: state.results.concat({
        id: new Date(),
        value: action.payload.counterValue
      })
    });
  } else if (action.type === actionTypes.DEL_RESULT) {
    return updateObject(state, {
      results: state.results.filter(result => result.id !== action.payload.id)
    });
  }
  return state;
};

export default resultReducer;
