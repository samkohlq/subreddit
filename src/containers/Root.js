import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "../configureStore";
import AsyncApp from "./AsyncApp";

// create store which holds complete state tree of app
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      /* provider makes store available to any nested components
      wrapped in connect() function */
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
