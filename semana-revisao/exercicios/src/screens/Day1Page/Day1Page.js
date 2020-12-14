import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goHome } from '../../router/Coordinator'

const Day1Page = () => {
    const history = useHistory()
    const [textEx1, setTextEx1] = useState('')
    const [textEx2, setTextEx2] = useState('')

    const handleInputEx1 = (e) => {
        const reverse = e.target.value.split("").reverse().join("")
        setTextEx1(reverse)
    }

    const handleInputEx2 = (e) => {
        const reverse = e.target.value.split("").reverse().join("").replace(/ /g, "")
        if (reverse === e.target.value.replace(/ /g, "")) {
            setTextEx2('É um palíndromo')
        } else {
            setTextEx2('Não é um palíndromo')
        }
    }

    return (
        <div>
            <h1>Dia 1</h1>
            <button onClick={()=>goHome(history)}>Início</button>
            
            <h3>Exercício 1</h3>
            <input onChange={handleInputEx1}/>
            <p>Texto revertido: {textEx1}</p>

            <h3>Exercício 2</h3>
            <input onChange={handleInputEx2}/>
            <p>Reposta: {textEx2}</p>

        </div>
    )
}

export default Day1Page