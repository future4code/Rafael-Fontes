import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'

const TripDetailsPage = (props) => {

    useProtectedTripPage()

    const history = useHistory()
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
            TripDetailsPage
        </div>
    )
}

export default TripDetailsPage