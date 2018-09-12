import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from './reducers';

import OpenWeatherMap from "./components/OpenWeatherMap";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
          <h1>Weather App</h1>
          <SearchBar/>
          <OpenWeatherMap/>
      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.querySelector(".wrapper")
);
