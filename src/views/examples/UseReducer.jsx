import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store/index.js'
import { numberAdd2, login } from '../../store/actions/index.js'



const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [num, setNum] = React.useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text"> {state.user.name} </span> :
                    <span className="text"> Sem Usuário </span>}

                <span className="text"> {state.number} </span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'João')} >Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)} >+2</button>

                    <button className="btn" onClick={() => dispatch({type: 'numberMult7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'int'})}>Int</button>
                    <input className='input' value={num} onChange={e => setNum(e.target.value)} />
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: num })}>Somar</button>

                </div>
            </div>
        </div>
    )
}

export default UseReducer
