import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToFeedPage, goToSignUpPage } from '../../router/Coordinator'
import { useForm } from '../../hooks/UseForm'
import axios from 'axios'
import { useUnprotectedPage } from '../../hooks/UseUnprotectedPage'

const LoginPage = () => {
    useUnprotectedPage()

    const history = useHistory()
    const {form, onChange, resetState} = useForm({ email: "", password: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login',body)
        .then((res)=> {
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('username',res.data.user.username)
            goToFeedPage(history)
            alert(`Bem-vindo ${res.data.user.username} Logado com sucesso.`)
        })
        .catch((err)=> {
            console.log(err)
            alert("Digite senha e/ou usuário válidos")
        })
    }

    return (
        <div>
            <Header />
            <form onSubmit={onSubmitForm}>
                <input name='email' value={form.email} type='email' required onChange={handleInputChange}/>
                <input name='password' value={form.password} type='password' required onChange={handleInputChange}/>
                <button type='submit'>Entrar</button>    
            </form>
            <button onClick={()=> goToSignUpPage(history)}>Não possui cadastro? Clique Aqui!</button>
        </div>
    )
}

export default LoginPage