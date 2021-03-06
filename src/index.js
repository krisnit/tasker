import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import App from "./App";
import thunk from "redux-thunk";
import { fetchPosts } from "./store/actions";
import logger from "redux-logger";
const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
