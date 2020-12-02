import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPage, goToSignUpPage } from '../../router/Coordinator'
import { NavBar, Options, Hello, Title, ButtonStyled } from './styles'
import { AppBar, Toolbar } from '@material-ui/core'

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
        <AppBar color="inherit" position="fixed">
            {/* <Toolbar > */}
                <NavBar>
                    <Title onClick={()=> goToFeedPage(history)}>labeddit</Title>
                    {token ?
                        <Options>
                            <Hello>Olá {username}!</Hello>
                            <ButtonStyled color="primary" variant="outlined" onClick={logout}>Sair</ButtonStyled>
                        </Options>
                    :
                        <Options>
                            <ButtonStyled color="primary" variant="outlined" onClick={()=> goToLoginPage(history)}>Entrar</ButtonStyled>
                            <ButtonStyled color="primary" variant="contained" onClick={()=> goToSignUpPage(history)}>Cadastrar</ButtonStyled>
                        </Options>
                    }            
                </NavBar>
            {/* </Toolbar> */}
        </AppBar>

    )
}

export default Header