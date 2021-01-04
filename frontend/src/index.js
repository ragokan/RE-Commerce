import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./ant.css";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store";

import { setLanguage } from "lokaly";
let language = localStorage.getItem("language");
if (!language) setLanguage("en");
else setLanguage(language);

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
