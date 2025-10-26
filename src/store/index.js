import reducer from './reducers/index.js'


const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    // foco
    number: 0
}

export {
    reducer,
    initialState
}