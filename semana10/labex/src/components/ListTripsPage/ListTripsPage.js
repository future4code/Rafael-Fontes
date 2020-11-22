import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedListPage } from '../../hooks/useProtectedListPage'
import Header from '../Header/Header'
import { LogoutButton } from '../TripDetailsPage/styles'
import { ListDiv, Table, Td, Th, Tr, TripLine } from './styles'
import { Button } from '@material-ui/core'
import { Loading } from '../HomePage/styles'

const ListTripsPage = (props) => {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [tripIds, setTripIds] = useState([])
    const [error,setError] = useState('')
    
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
            setError('')
        })
        .catch ((err)=>{
            console.log(err)
            setError(err)
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

    const onClickRemove = (id) => {
        if(window.confirm("Deseja excluir esta viagem?")){
        Axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips/${id}`)
        .then ((res)=>{
            alert("Viagem excluída com sucesso")
        })
        .catch ((err)=>{
            console.log(err)
        })
        }
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

            <ListDiv>
                <h1>Lista de Viagens</h1>
                <Table>
                    <Tr>
                        <Th>Viagem</Th>
                        <Th>Planeta</Th>
                        <Th>Data</Th>
                        <Th>Confirmados</Th>
                        <Th>Pendentes</Th>
                    </Tr>
                </Table>
                {(error!=='') ? <Loading><h2>Acessando banco de dados...</h2></Loading> : trips.map(trip=> {
                    return (
                        <TripLine>
                            <Table>
                                <Tr>
                                    <Td value={trip.id}>{trip.name}</Td>
                                    <Td value={trip.id}>{trip.planet}</Td>
                                    <Td value={trip.id}>{trip.date}</Td>
                                </Tr>
                            </Table>
                            <Button variant="contained" color="primary">Detalhes</Button>
                            <Button variant="outlined" color="primary" onClick={()=>onClickRemove(trip.id)}>Excluir</Button>
                        </TripLine>
                    ) 
                })}
            </ListDiv>
        </div>
    )
}

export default ListTripsPage