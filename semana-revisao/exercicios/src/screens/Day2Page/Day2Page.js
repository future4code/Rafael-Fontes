import React from 'react'
import { useHistory } from 'react-router-dom'
import { goHome } from '../../router/Coordinator'
            
const Day2Page = () => {
    const history = useHistory()

    return (
        <div>
            <h1>Dia 2</h1>
            <button onClick={()=>goHome(history)}>Início</button>
        </div>
    )
}

export default Day2Page