import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedListPage } from '../../hooks/useProtectedListPage'
import Header from '../Header/Header'
import { LogoutButton } from '../TripDetailsPage/styles'
import { ListDiv, TripLine } from './styles'

const ListTripsPage = (props) => {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [tripIds, setTripIds] = useState([])

    useProtectedListPage()

    useEffect(() => {
        getTrips()
        // getTripDetails()
    }, [])

    const getTripDetails = () => {

        // {tripIds.map(tripId=> {

        //     return
        // })}
        // Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trip/${tripId}`,
        // {
        //     headers: {
        //         auth: localStorage.getItem("token")
        //     }
        // }
        // )
        // .then((res) => {
        //     console.log(res.data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    
    const getTrips = () => {
        Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips')
        .then ((res)=>{
            setTrips(res.data.trips)
        })
        .catch ((err)=>{
            console.log(err)
        })
        {trips.map(trip=> {
            return console.log(trip.id) /*setTripIds(tripIds.concat(trip.id))*/
        })}
        console.log("Ids",tripIds)
    }


    const logout = () => {
        if(window.confirm("Deseja sair da Área do Administrador?")){
            localStorage.removeItem("token")
            history.push("/login")
        }
    }

    const getList = () => {

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

            <ListDiv>
                <h1>Lista de Viagens</h1>
                <table>
                    <tr>
                        <th>Viagem</th>
                        <th>Planeta</th>
                        <th>Data</th>
                    </tr>
                </table>
                {trips.map(trip=> {
                    return (
                        <TripLine>
                            <table>
                                <tr>
                                    <td value={trip.id}>{trip.name}</td>
                                    <td value={trip.id}>{trip.planet}</td>
                                    <td value={trip.id}>{trip.date}</td>
                                </tr>
                            </table>
                        </TripLine>
                    ) 
                })}
            </ListDiv>
        </div>
    )
}

export default ListTripsPage