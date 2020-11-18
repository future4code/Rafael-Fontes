import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'

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

            <h2>Entrar na Área do Administrador</h2>
            <p>E-mail</p>
            <input value={email} onChange={onChangeEmail}/>
            <p>Senha</p>
            <input type="password" value={password} onChange={onChangePassword}/>
            <button onClick={login}>Entrar</button>
        </div>
    )
}

export default LoginPage