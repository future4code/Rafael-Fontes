import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToSignUpPage } from '../../router/Coordinator'

const LoginPage = () => {
    const history = useHistory()
    return (
        <div>
            <Header />
            <form>
                <input type='text' value='e-mail'/>
                <input type='text' value='password'/>
                <button>Entrar</button>    
            </form>
            <button onClick={()=> goToSignUpPage(history)}>Primeiro Acesso</button>
        </div>
    )
}

export default LoginPage