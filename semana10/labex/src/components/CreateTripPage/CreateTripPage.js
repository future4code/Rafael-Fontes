import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedCreatePage } from '../../hooks/useProtectedCreatePage'
import Header from '../Header/Header'

const CreateTripPage = (props) => {
    const history = useHistory()
    useProtectedCreatePage()

    const logout = () => {
        localStorage.removeItem("token")
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

            <button onClick={logout}>Sair da Área do Administrador</button>
            CreateTripPage
        </div>
    )
}

export default CreateTripPage