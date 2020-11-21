import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedCreatePage } from '../../hooks/useProtectedCreatePage'
import { useForm } from '../../hooks/useForm'
import Header from '../Header/Header'
import Axios from 'axios'
import { LogoutButton } from '../TripDetailsPage/styles'
import { CreateDiv } from './styles'

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
                <button onClick={logout}>Sair da Área do Administrador</button>
            </LogoutButton>

            <CreateDiv>
                <h1>Adicionar Viagem</h1>
                <form onSubmit={onSubmitForm}>
                    <div>
                        <label><b>Nome: </b></label>
                        <input value={form.name} name="name" onChange={handleInputChange} pattern={"(.*[a-z]){4}"} required></input>
                    </div>
                    <div>
                        <label><b>Planeta: </b></label>
                        <select value={form.planet} name="planet" onChange={handleInputChange} required>
                            <option value="" selected="selected">Selecione um item da lista</option>
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
                    </div>
                    <div>
                        <label><b>Data: </b></label>
                        <input value={form.date} name="date" onChange={handleInputChange} type="date" required></input>
                    </div>
                    <div>
                        <label><b>Descrição: </b></label>
                        <input value={form.description} name="description" onChange={handleInputChange}  required></input>
                    </div>
                    <div>
                        <label><b>Duração: </b></label>
                        <input value={form.duration} name="duration" onChange={handleInputChange} type="number" min="50" required></input>
                    </div>
                    <button>Criar</button>
                </form>     
            </CreateDiv>
       
        </div>
    )
}

export default CreateTripPage