import React from 'react'
import { useHistory } from 'react-router-dom'
import { goHome } from '../../router/Coordinator'
            
const Day4Page = () => {
    const history = useHistory()

    return (
        <div>
            <h1>Dia 4</h1>
            <button onClick={()=>goHome(history)}>Início</button>
        </div>
    )
}

export default Day4Page