import React, { useState } from "react";

export default (props) => {
    const [valor, setValor] = useState("Inicial");

    function manipularChange(e) {
        if (e.target.value.trim()) {
            setValor(e.target.value);
        } else {
            setValor("Inicial");
        }
    }

    return (
        <div>
            <h2>{ valor }</h2>
            {/* Componente de leitura */}
            <input type="text" value={valor} readOnly />
            {/* Componente controlado */}
            <input type="text" value={valor} onChange={manipularChange} />
            {/* Componente não controlado */}
            <input type="text" value={undefined} onChange={manipularChange} />
        </div>
    );
}
