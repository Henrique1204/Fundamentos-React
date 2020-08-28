import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
    const listaLi = alunos.map((aluno) => {
        return (<li key={ aluno["id"] }>{ aluno["id"] } - { aluno["nome"] } - { aluno["nota"] }</li>);
    });

    return (
        <div>
            <ul style={ { padding: 0, listStyle: "none", textAlign: "left" } }>
                {listaLi}
            </ul>
        </div>
    );
}