import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { thisTypeAnnotation } from "@babel/types";
import propTypes from "prop-types";
import Library from "./Library";

let BookList = [
  { title: "The Sun Also Rises 2", author: "Ernest Emingway", pages: 1000 },
  { title: "The Sun Also Rises", author: "Ernest Emingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 160 }
];

ReactDOM.render(<Library books={BookList} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
