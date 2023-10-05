import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";
import View from "./view.jsx";
import "./index.css";
const App = () => (
  <div className="">
    <div>
      <Header />
    </div>
    <div>
      <View />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));