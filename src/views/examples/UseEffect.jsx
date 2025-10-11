import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = React.useState(1)
    const [fatorial, setFatorial] = React.useState(1)
    const [status, setStatus] = React.useState('')

    React.useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    React.useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    React.useEffect(function () {
        if (fatorial > 1000) {
            document.title = "Eita!!!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text"> Fatorial: </span>
                <span className="text red"> {fatorial === -1 ? 'Não existe' : fatorial} </span>
                <input type="number" className='input' value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red"> {status} </span>
                </div>

            </div>

        </div>
    )
}

export default UseEffect
