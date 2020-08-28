import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(1);
    const [vivo, setVivo] = useState("Vivo");

    function fornecerInformacoes(nome, idade, vivo) {
        setNome(nome);
        setIdade(idade);
        setVivo(vivo ? "Vivo" : "Morto" );
    }

    return (
        <div>
            <p>{ nome } - { idade } - { vivo }</p>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    );
}
