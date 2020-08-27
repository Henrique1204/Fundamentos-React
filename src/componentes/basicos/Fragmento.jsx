import React from "react";

export default function Fragmento(props) {
    return (
        // <> - É uma abreviação de React.Fragment, porém desta forma você não consegue passar um atributo, por exemplo id="Fragmento"
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    );
}