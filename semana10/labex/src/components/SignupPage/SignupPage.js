import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import { Button, TextField } from '@material-ui/core'
import { LoginDiv } from '../LoginPage/styles'

const SignupPage = (props) => {
    const history = useHistory()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const signup = () => {
        const body = {
            "email": email,
            "password": password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/signup',body)
        .then ((res)=>{
            history.push("/login");
            alert("Bem-vindo. Acesso criado com sucesso.")
        })
        .catch ((err)=>{
            alert("Erro",err)
        })
    }

    const login = () => {
        history.push("/login")
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
                <h2>Criar novo Administrador</h2>
                <p></p>
                <TextField value={email} placeholder="E-mail" onChange={onChangeEmail}/>
                <p></p>
                <TextField type="password" placeholder="Senha" value={password} onChange={onChangePassword}/>
                <p></p>
                <Button variant="contained" color="primary" onClick={signup}>Criar</Button>
                <p></p>
                <Button variant="outlined" color="primary" onClick={login}>Voltar</Button>
            </LoginDiv>
        </div>
    )
}

export default SignupPage