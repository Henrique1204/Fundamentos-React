import React from "react";

// Por convenção os componentes vão ter a primeira letra maiúscula
export default function Primeiro() {
    const msg = "Seja bem-vindo(a)!";
    
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>{ msg }</p>
        </div>
    );
}
    