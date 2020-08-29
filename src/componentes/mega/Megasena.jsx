import React, {useState} from "react";
import geradorDeNumeros from "./geradorDeNumeros";
import "./Megasena.css";

export default (props) => {
    const [qnt, setQnt] = useState(props.qnt || 6);
    const numerosIniciais = Array(qnt).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.map((numero, index) => <span className="numero" key={index}>{numero}</span>)}</h3>
            <div>
                <label htmlFor="qnt">Quantidade de numeros:</label>
                <input type="number" id="qnt" name="qnt" min="6" max="15" value={qnt} onChange={
                    (e) => {
                        const qnt = Number(e.target.value);
                        setQnt(qnt);
                        setNumeros(Array(qnt).fill(0));
                    }
                } />
            </div>
            <button type="button" onClick={(e) => setNumeros(geradorDeNumeros(qnt))}>Gerar Numeros</button>
        </div>
    );
}
