import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'
import { CandidateDiv, DataDiv, LogoutButton, SelectDiv, TripDiv } from './styles'
import { Button } from '@material-ui/core'
import { Loading } from '../HomePage/styles'

const TripDetailsPage = (props) => {
    const [trips, setTrips] = useState([])
    const [candidates, setCandidates] = useState([])
    const [tripId, setTripId] = useState('')
    const [error,setError] = useState('')
    
    useProtectedTripPage()
    useEffect(() => {
        getTripDetails()
        getTrips()
    }, [tripId])

    const getTripDetails = () => {
        Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trip/${tripId}`,
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        )
        .then((res) => {
            setCandidates(res.data.trip.candidates)
        })
        .catch((err) => {
            console.log(err)
        })
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
    }

    const onSelectTrip = (e) => {
        setTripId(e.target.value)
    }

    const history = useHistory()
    const logout = () => {
        if(window.confirm("Deseja sair da Área do Administrador?")){
            localStorage.removeItem("token")
            history.push("/login")
        }
    }

    const onClickApprove = (id) => {
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips/${tripId}/candidates/${id}/decide`,
        {
            "approve": true
        },
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        getTripDetails()
    }

    const onClickReject = (id) => {
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips/${tripId}/candidates/${id}/decide`,
        {
            "approve": false
        },
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        getTripDetails()
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

            <TripDiv>
                <SelectDiv>
                    <h1>Gerenciar Candidatos</h1>
                    <select value={tripId} onChange={onSelectTrip}>
                        <option>Selecione uma viagem</option>
                        {trips.map(trip=> {
                            return <option value={trip.id}>{trip.name}</option>
                        })}
                    </select>
                </SelectDiv>
                <DataDiv>
                    {(error!=='') ? <Loading><h2>Acessando banco de dados...</h2></Loading> : candidates.map(candidate => {
                        return (
                            <CandidateDiv>
                                <p><b>{candidate.name}</b></p>
                                <p>Idade: {candidate.age} anos</p>
                                <p>Profissão: {candidate.profession}</p>
                                <p>País: {candidate.country}</p>
                                <p>{candidate.applicationText}</p>
                                <Button variant="contained" color="primary" onClick={()=>onClickApprove(candidate.id)}>Aprovar</Button>
                                <span> </span>
                                <Button variant="outlined" color="primary" onClick={()=>onClickReject(candidate.id)}>Rejeitar</Button>
                            </CandidateDiv>
                        )
                    })}
                </DataDiv>
            </TripDiv>

        </div>
    )
}

export default TripDetailsPage