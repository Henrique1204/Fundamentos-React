import React from "react";

export default (props) => {
    const { maximo, minimo } = props;
    const numeroAleatorio = parseInt( Math.random() * maximo - minimo) + minimo;

    return (
        <>
            <p>Numero sorteado: { numeroAleatorio }</p>
        </>
    );
}
