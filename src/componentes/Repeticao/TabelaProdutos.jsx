import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default () => {
    const linhasProdutos = produtos.map((produto) => {
        return (
            <tr key={ produto["id"] } >
                <td>{ produto["id"] }</td>
                <td>{ produto["nome"] }</td>
                <td>{ produto["preco"] }</td>
            </tr>
        );
    });

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
                { linhasProdutos }
            </tbody>
        </table>
    )
}