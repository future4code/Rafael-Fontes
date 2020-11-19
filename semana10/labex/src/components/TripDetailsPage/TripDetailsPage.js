import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedTripPage } from '../../hooks/useProtectedTripPage'
import Header from '../Header/Header'

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
            <div>
                <label>Selecione uma viagem:</label>
                <select value={tripId} onChange={onSelectTrip}>
                    <option>Selecione uma viagem</option>
                    {trips.map(trip=> {
                        return <option value={trip.id}>{trip.name}</option>
                    })}
                </select>
            </div>
            <div>
                {candidates.map(candidate => {
                    return (
                        <div>
                            <p>{candidate.name}</p>
                            <p>{candidate.age}</p>
                            <p>{candidate.profession}</p>
                            <p>{candidate.country}</p>
                            <p>{candidate.applicationText}</p>
                            <button>Aprovar</button>
                            <button>Rejeitar</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TripDetailsPage