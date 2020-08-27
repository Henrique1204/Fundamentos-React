import React from "react";

export default (props) => {
    const numeroAleatorio = Math.floor( Math.random() * (props["maximo"] - props["minimo"]) ) + props["minimo"];

    return (
        <>
            <p>Numero sorteado: { numeroAleatorio }</p>
        </>
    );
}
