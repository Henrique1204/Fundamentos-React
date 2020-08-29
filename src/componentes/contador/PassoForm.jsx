import React from "react";

export default (props) => {
    return (
        <div>
            <label htmlFor="passo">Passo: </label>
            <input type="number" id="passo" name="passo" value={props["passo"]} onChange={(e) => props["alterarPasso"](e.target.value)} min="1" />
        </div>
    );  
}
