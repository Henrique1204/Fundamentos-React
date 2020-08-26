import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const elemento = document.getElementById("root");
const tag = <strong>Olá React!</strong>

ReactDOM.render(
    <div>{tag}</div>,
    elemento
);
