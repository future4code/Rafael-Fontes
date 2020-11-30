import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToLoginPage } from '../../router/Coordinator'

const SignUpPage = () => {
    const history = useHistory()
    return (
        <div>
            <Header />
            <form>
                <input type='text' value='e-mail'/>
                <input type='text' value='password'/>
                <button>Cadastrar</button>    
            </form>
            <button onClick={()=> goToLoginPage(history)}>Voltar</button>
        </div>
    )
}

export default SignUpPage