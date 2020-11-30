import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToLoginPage } from '../../router/Coordinator'
import { useForm } from '../../hooks/UseForm'
import axios from 'axios'

const SignUpPage = () => {
    const history = useHistory()
    const {form, onChange, resetState} = useForm({ name: "", email: "", password: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.password,
            "username": form.name
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup',body)
        .then((res)=> {
            goToLoginPage(history)
            alert(`Bem-vindo ${res.data.user.username}. Acesso criado com sucesso.`)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <form onSubmit={onSubmitForm}>
                <input name='name' value={form.name} type='text' required onChange={handleInputChange}/>
                <input name='email' value={form.email} type='email' required onChange={handleInputChange}/>
                <input name='password' value={form.password} type='password' required onChange={handleInputChange}/>
                <button type='submit'>Cadastrar</button>    
            </form>
            <button onClick={()=> goToLoginPage(history)}>Voltar</button>
        </div>
    )
}

export default SignUpPage