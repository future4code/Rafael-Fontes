import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedCreatePage } from '../../hooks/useProtectedCreatePage'
import { useForm } from '../../hooks/useForm'
import Header from '../Header/Header'
import Axios from 'axios'
import { LogoutButton } from '../TripDetailsPage/styles'
import { CreateDiv, FormLine, CreateButton } from './styles'
import { Button, TextField } from '@material-ui/core'

const CreateTripPage = (props) => {
    const {form, onChange, resetState} = useForm({ name: "", planet: "", date: "", description: "", duration: "" })
    const history = useHistory()
    useProtectedCreatePage()
    
    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const logout = () => {
        if(window.confirm("Deseja sair da Área do Administrador?")){
            localStorage.removeItem("token")
            history.push("/login")
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.duration
        }
        Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips`, body,
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=> {
            alert("Nova viagem criada com sucesso")
            resetState()  
        })
        .catch((err)=> {
            console.log(err)
        })
        console.log(form)
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

            <LogoutButton>
                <p></p>
                <Button variant="outlined" color="primary" onClick={logout}>Sair da Área do Administrador</Button>
            </LogoutButton>

            <CreateDiv>
                <h1>Adicionar Viagem</h1>
                <form onSubmit={onSubmitForm}>
                    <FormLine>
                        <input value={form.name} placeholder="Nome" name="name" onChange={handleInputChange} pattern="(.*[a-z]){4}" required></input>
                    </FormLine>
                    <FormLine>
                        <select value={form.planet} name="planet" onChange={handleInputChange} required>
                            <option value="" selected="selected">Selecione um planeta</option>
                            <option value="Terra">Terra</option>
                            <option value="Júpiter">Júpiter</option>
                            <option value="Marte">Marte</option>
                            <option value="Mercúrio">Mercúrio</option>
                            <option value="Lua">Lua</option>
                            <option value="Netuno">Netuno</option>
                            <option value="Plutão">Plutão</option>
                            <option value="Saturno">Saturno</option>
                            <option value="Urânio">Urânio</option>
                            <option value="Vênus">Vênus</option>
                        </select>
                    </FormLine>
                    <FormLine>
                        <input value={form.date} helperText="Selecione uma data posterior a hoje" name="date" onChange={handleInputChange} type="date" required></input>
                    </FormLine>
                    <FormLine>
                        <input value={form.description} placeholder="Descrição" name="description" onChange={handleInputChange} required></input>
                    </FormLine>
                    <FormLine>
                        <input value={form.duration} placeholder="Duração" name="duration" onChange={handleInputChange} type="number" min="50" required></input>
                    </FormLine>
                    <CreateButton><button variant="contained" color="primary">Criar</button></CreateButton>
                </form>     
            </CreateDiv>
       
        </div>
    )
}

export default CreateTripPage