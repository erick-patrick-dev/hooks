import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from '../data/DataContext'

const App = props => {
    const [state, setState] = React.useState(data)

    return (
        // criando um objeto de estado para o contexto
        <DataContext.Provider value={{state, setState}}> 
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App