import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import combinedReducer from "./store/combinedReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] dispatching", action);
      const result = next(action);
      console.log("[Middleware] Next State", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
