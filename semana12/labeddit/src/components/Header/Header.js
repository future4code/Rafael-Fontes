import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPage, goToPostPage, goToSignUpPage } from '../../router/Coordinator'
import { NavBar, Options, Hello } from './styles'

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const logout = () => {
        if(window.confirm("Deseja sair da área de acesso ao usuário?")){
            localStorage.removeItem("token")
            goToLoginPage(history)
        }
    }

    return (
        <NavBar>
            <h1 onClick={()=> goToFeedPage(history)}>LabEddit</h1>
            {token ?
                <Options>
                    <Hello>Olá {username}</Hello>
                    <button onClick={logout}>Sair</button>
                </Options>
            :
                <Options>
                    <button onClick={()=> goToLoginPage(history)}>Entrar</button>
                    <button onClick={()=> goToSignUpPage(history)}>Cadastrar</button>
                </Options>
            }            
            {/* <button onClick={()=> goToFeedPage(history)}>Feed</button>
            <button onClick={()=> goToPostPage(history)}>Meus Posts</button> */}
        </NavBar>
    )
}

export default Header