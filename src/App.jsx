import React from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametros from "./componentes/basicos/ComParametros";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import TabelaProdutos from "./componentes/repeticao/TabelaProdutos";
import ParOuImpar from "./componentes/condicional/ParOuImpar";
import UsuarioInfo from "./componentes/condicional/UsuarioInfo";
import DiretaPai from "./componentes/comunicacao/DiretaPai";
import IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import Input from "./componentes/formulario/Input";
import "./App.css";

export default () => (
    <div id="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">
            <Card titulo="#11 - Componente Controlado (Input)" color="#0F6">
                <Input />
            </Card>
           <Card titulo="#10 - Comunicação Indireta" color="#60F">
                <IndiretaPai />
            </Card>
            <Card titulo="#9 - Comunicação Direta" color="#F60">
                <DiretaPai />
            </Card>
            <Card titulo="#8 - Condicional">
                <ParOuImpar numero={3} />
                <UsuarioInfo usuario={ { nome: "Paulo" } } />
            </Card>
            <Card titulo="#7 - Repeticao Produtos" color="#6F0">
                <TabelaProdutos />
            </Card>
            <Card titulo="#6 - Repeticao Alunos" color="#06F">
                <ListaAlunos />
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