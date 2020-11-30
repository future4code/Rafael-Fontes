import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'
import { Button, TextField } from '@material-ui/core'
import { LoginDiv } from './styles'

const LoginPage = (props) => {
    useProtectedTripPage()

    const history = useHistory()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        const body = {
            "email": email,
            "password": password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/login',body)
        .then ((res)=>{
            localStorage.setItem("token", res.data.token);
            history.push("/trip");
            alert("Bem-vindo. Logado com sucesso.")
        })
        .catch ((err)=>{
            alert("Erro",err)
        })
    }

    const signup = () => {
        history.push('/signup')
    }

    return (
        <div>
            <Header
                onClickHome={props.onClickHome}
                onClickAdm={props.onClickAdm}
                onClickForm={props.onClickForm}
                onClickMyTrips={props.onClickMyTrips}
                onClickList={props.onClickList}
                onClickCreate={props.onClickCreate}
                onClickTrip={props.onClickTrip}
            />

            <LoginDiv>
                <h2>Entrar na Área do Administrador</h2>
                <p></p>
                <TextField value={email} placeholder="E-mail" onChange={onChangeEmail}/>
                <p></p>
                <TextField type="password" placeholder="Senha" value={password} onChange={onChangePassword}/>
                <p></p>
                <Button variant="contained" color="primary" onClick={login}>Entrar</Button>
                <p></p>
                <Button variant="outlined" color="primary" onClick={signup}>Primeiro Acesso</Button>
            </LoginDiv>
        </div>
    )
}

export default LoginPage