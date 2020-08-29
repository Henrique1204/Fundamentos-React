import React, { Component } from "react";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numero: (props["inicio"]) ? props["inicio"] : 0,
            passo: (props["passo"]) ? props["passo"] : 1
        };

        // Alternativa para fazer a função travar a referência de this na classe
        this.alterarPasso = this.alterarPasso.bind(this);
    }

    // Alternativa para fazer a função travar a referência de this na classe
    inc = () => {
        const {numero: num, passo} = this.state;

        this.setState({ numero: num + passo });
    };

    dec = () => {
        const {numero: num, passo} = this.state;

        this.setState({ numero: num - passo });
    }

    alterarPasso(novoPasso) {
        this.setState({ passo: Number(novoPasso) });
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state["numero"]} />
                <PassoForm passo={this.state["passo"]} alterarPasso={this.alterarPasso} />
                <Botoes incremento={this.inc} decremento={this.dec}  />
            </div>
        )
    }
}

export default Contador;
