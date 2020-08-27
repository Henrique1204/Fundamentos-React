import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametros from "./componentes/basicos/ComParametros";
import Fragmento from "./componentes/basicos/Fragmento"

const elemento = document.getElementById("root");

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametros titulo="Situação do Aluno" aluno="Paulo" nota={8} />
        <Fragmento />
    </div>,
    elemento
);
