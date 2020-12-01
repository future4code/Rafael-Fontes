import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToFeedPage } from '../../router/Coordinator'

const ErrorPage = () => {
    const history = useHistory()
    
    return (
        <div>
            <Header />
            ErrorPage
            <button onClick={() => goToFeedPage(history)}>Voltar</button>
        </div>
    )
}

export default ErrorPage