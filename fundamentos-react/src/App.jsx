import React from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametros from "./componentes/basicos/ComParametros";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";

// Funcção reduzida, só vai funcionar com o export default
// pq os outros export precisam do nome para serem referenciados na hora do import
// O parânteses serve para indicar a expressão, porém funciona sem tbm
export default () => (
    <div id="app">
        <h1>Fundamentos do React</h1>
        <Aleatorio maximo={10} minimo={1} />
        <Fragmento />
        <ComParametros titulo="Situação do Aluno" aluno="Paulo" nota={8} />
        <Primeiro></Primeiro>
    </div>
);