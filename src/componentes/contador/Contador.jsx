import React, { Component } from "react";

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

    dec() {
        const {numero: num, passo} = this.state;

        this.setState({ numero: num - passo });
    }

    alterarPasso(e) {
        this.setState({ passo: Number(e.target.value) });
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>{ this.state["numero"] }</p>
                <form>
                    <label htmlFor="passo">Passo: </label>
                    <input type="number" id="passo" name="passo" value={this.state["passo"]} onChange={this.alterarPasso} min="1" />
                </form>
                <button type="button" onClick={this.inc}>+</button>
                {/* Alternativa para fazer a função travar a referência de this na classe */}
                <button type="button" onClick={() => this.dec()}>-</button>
            </div>
        )
    }
}

export default Contador;
