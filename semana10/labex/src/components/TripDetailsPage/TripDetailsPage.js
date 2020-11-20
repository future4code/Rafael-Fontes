import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'
import { CandidateDiv, DataDiv, LogoutButton, SelectDiv, TripDiv } from './styles'

const TripDetailsPage = (props) => {
    const [trips, setTrips] = useState([])
    const [candidates, setCandidates] = useState([])
    const [tripId, setTripId] = useState('')
    
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
            console.log(res.data)
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
        })
        .catch ((err)=>{
            console.log(err)
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

            <TripDiv>
                <SelectDiv>
                    <h1>Gerenciar Candidatos</h1>
                    {/* <label><b>Viagem: </b></label> */}
                    <select value={tripId} onChange={onSelectTrip}>
                        <option>Selecione uma viagem</option>
                        {trips.map(trip=> {
                            return <option value={trip.id}>{trip.name}</option>
                        })}
                    </select>
                </SelectDiv>
                <DataDiv>
                    {candidates.map(candidate => {
                        return (
                            <CandidateDiv>
                                <p>{candidate.name}</p>
                                <p>{candidate.age}</p>
                                <p>{candidate.profession}</p>
                                <p>{candidate.country}</p>
                                <p>{candidate.applicationText}</p>
                                <button onClick={()=>onClickApprove(candidate.id)}>Aprovar</button>
                                <button onClick={()=>onClickReject(candidate.id)}>Rejeitar</button>
                            </CandidateDiv>
                        )
                    })}
                </DataDiv>
            </TripDiv>

        </div>
    )
}

export default TripDetailsPage