import React from "react";

export default (props) => {
    const callback = props["quandoClicar"];
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;

    return (
        <div>
            <p>Filho</p>
            <button onClick={(e) => callback("Pai um", gerarIdade(), false)} >Fornecer Informações</button>
        </div>
    );
}
