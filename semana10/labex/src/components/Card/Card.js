import React from 'react'
import { CardDiv, Title } from './styles'

const Card = (props) => {

    return (
        <CardDiv>
            <Title>{props.name}</Title>
            <p>{props.description}</p>
            <p><b>Planeta:</b> {props.planet}</p>
            <p><b>Data:</b> {props.date}</p>
            <p><b>Duração:</b> {props.durationInDays} dias</p>
            <button onClick={props.selectTrip}>Inscrever-se</button>
        </CardDiv>

    )

}

export default Card