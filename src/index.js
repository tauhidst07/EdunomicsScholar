import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import store from "./components/redux/store";
// import { Provider } from "react-redux";
import DataProvider from "./components/redux/store";

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  // </Provider>
  document.getElementById("root")
);
