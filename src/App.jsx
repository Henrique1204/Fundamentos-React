import React from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametros from "./componentes/basicos/ComParametros";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/Repeticao/ListaAlunos";
import TabelaProdutos from "./componentes/Repeticao/TabelaProdutos";
import "./App.css";

export default () => (
    <div id="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">
            <Card titulo="#7 - Repeticao Produtos" color="#6F0">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#6 - Repeticao Alunos" color="#06F">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#5 - Componente com filho" color="#F06">
                <Familia sobrenome="Santos">
                    <FamiliaMembro nome="Paulo" />
                    <FamiliaMembro nome="Silva" />
                    <FamiliaMembro nome="Henrique" />
                </Familia>
            </Card>
            <Card titulo="#4 - Numero Aleatório" color="#0F6">
                <Aleatorio maximo={10} minimo={1} />
            </Card>
            <Card titulo="#3 - Fragmento" color="#60F">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Parâmetro" color="#F60">
                <ComParametros titulo="Situação do Aluno" aluno="Paulo" nota={8} />
            </Card>
            <Card titulo="#1 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);