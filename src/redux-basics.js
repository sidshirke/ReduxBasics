const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//Reducer -- Changes tbe state
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload.value
    };
  }
  return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
  console.log("subscript" + store.getState());
});

//Dispatching The Action
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", payload: { value: 10 } });
console.log(store.getState());
