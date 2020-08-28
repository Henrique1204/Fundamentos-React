import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default () => {
    function getLinhas(lista) {
        return lista.map((item) => {
            return (
                <tr key={ item["id"] } >
                    <td>{ item["id"] }</td>
                    <td>{ item["nome"] }</td>
                    <td>{ item["preco"] }</td>
                </tr>
            );
        });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                { getLinhas(produtos) }
            </tbody>
        </table>
    )
}
