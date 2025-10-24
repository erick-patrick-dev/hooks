import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    // foco
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMult7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'int':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + parseInt(action.payload) }
        default:

            return state
    }
}

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
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })} >Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })} >+2</button>

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
