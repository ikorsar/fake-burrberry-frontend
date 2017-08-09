import React from "react";
import ReactDOM from "react-dom";

import PageHeader from "./components/Header/Header";
import App from "./App";
import PageFooter from "./components/Footer/Footer";

import "normalize.css";
import "./styles/flexboxgrid.css";
import "./styles/styles.css";

ReactDOM.render(
  <div>
    <PageHeader/>

    <App/>

    <PageFooter/>
  </div>,
  document.getElementById("root")
);
