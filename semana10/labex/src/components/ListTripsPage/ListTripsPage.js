import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedListPage } from '../../hooks/useProtectedListPage'
import Header from '../Header/Header'

const ListTripsPage = (props) => {
    
    const history = useHistory()
    useProtectedListPage()
    
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
            ListTripsPage
        </div>
    )
}

export default ListTripsPage