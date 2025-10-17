import React from "react";

const UseCallbackButtons = (props) => {
    console.log('Renderizou os botões')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)

/*
Esse componente filho não precisa ser renderizado novamente, portanto, se faz necessário 
o uso do useCallback no componente pai.

*/