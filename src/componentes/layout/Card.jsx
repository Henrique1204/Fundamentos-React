import React from "react";
import "./Card.css";

export default (props) => {
    const estiloCard = {backgroundColor: props["color"] || "#20F"}

    return (
        <div className="Card" style={estiloCard}>
            <h2 className="Titulo">{ props["titulo"] }</h2>
            <div className="Conteudo">
                {props["children"]}
            </div>
        </div>
    );
};