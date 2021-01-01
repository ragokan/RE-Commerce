import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./ant.css";
import App from "./App";
import "antd/dist/antd.css";
import { setLanguage } from "lokaly";
setLanguage("tr");

ReactDOM.render(<App />, document.getElementById("root"));
