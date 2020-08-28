import React from "react";
import If, {Else} from "./If";

export default (props) => {
    const usuario = props["usuario"] || {};

    return (
        <If teste={usuario && usuario["nome"]}>
            <p>Seja bem-vindo, { usuario["nome"] }!</p>
            <Else>
                <p>Seja bem-vindo, Amigão!</p>
            </Else>
        </If>
    );
}
