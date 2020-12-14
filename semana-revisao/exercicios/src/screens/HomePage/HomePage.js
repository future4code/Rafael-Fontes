import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToDay1, goToDay2, goToDay3, goToDay4 } from '../../router/Coordinator'

const HomePage = () => {
    const history = useHistory()

    return (
        <div>
            <h1 onClick={()=>goToDay1(history)}>Dia 1</h1>
            <h1 onClick={()=>goToDay2(history)}>Dia 2</h1>
            <h1 onClick={()=>goToDay3(history)}>Dia 3</h1>
            <h1 onClick={()=>goToDay4(history)}>Dia 4</h1>
        </div>
    )
}

export default HomePage