import React from "react";

export default function ComParametros(props) {
    const status = (props["nota"] >= 7) ? "aprovado" : "reprovado";

    return (
        <div>
            <h2>{ props["titulo"] }</h2>
            <p>
                <strong>{ props["aluno"] } </strong>
                tirou nota: <strong>{ props["nota"] } </strong>
                e foi <strong>{ status }!</strong>
            </p>
        </div>
    );
}