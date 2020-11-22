import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../Card/Card'
import Header from '../Header/Header'
import { Loading, TripsDiv } from '../HomePage/styles'

const HomePage = (props) => {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [error,setError] = useState('')
    
    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-fontes-dumont/trips')
        .then ((res)=>{
            setTrips(res.data.trips)
            setError('')
        })
        .catch ((err)=>{
            console.log(err)
            setError(err)
        })
    }

    const applyToTrip = (id) =>{
        history.push(`/form/${id}`)
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

            <TripsDiv>
                {(error!=='') ? <Loading><h2>Carregando viagens disponíveis...</h2></Loading> : trips.map(trip=> {
                    return (
                    <Card
                        date={trip.date}
                        description={trip.description}
                        durationInDays={trip.durationInDays}
                        id={trip.id}
                        name={trip.name}
                        planet={trip.planet}
                        selectTrip={()=>applyToTrip(trip.id)}
                    />)
                })}
            </TripsDiv>
        </div>
    )
}

export default HomePage