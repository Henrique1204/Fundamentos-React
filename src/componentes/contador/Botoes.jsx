import React, { Fragment } from "react";

export default (props) => {
    return (
        <Fragment>
                <button type="button" onClick={props["incremento"]}>+</button>
                <button type="button" onClick={props["decremento"]}>-</button>
        </Fragment>
    );  
}
