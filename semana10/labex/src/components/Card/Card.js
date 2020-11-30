import React from 'react'
import { CardDiv, ImgLine, Info, SubscriptionButton, Title } from './styles'
import { Button } from '@material-ui/core'
import Terra from '../../img/planets/earth.jpg'
import Marte from '../../img/planets/mars.jpg'
import Jupiter from '../../img/planets/jupiter.jpg'
import Mercurio from '../../img/planets/mercury.jpg'
import Lua from '../../img/planets/moon.jpg'
import Netuno from '../../img/planets/neptune.jpg'
import Plutao from '../../img/planets/pluto.jpg'
import Saturno from '../../img/planets/saturn.jpg'
import Uranio from '../../img/planets/uranus.jpg'
import Venus from '../../img/planets/venus.jpg'

const Card = (props) => {
    let imgPlanet = ""
    switch (props.planet) {
        case 'Terra':
            imgPlanet=Terra
            break;
        case 'Júpiter':
            imgPlanet=Jupiter
            break;
        case 'Jupiter':
            imgPlanet=Jupiter
            break;
        case 'Marte':
            imgPlanet=Marte
            break;
        case 'Mercúrio':
            imgPlanet=Mercurio
            break;
        case 'Lua':
            imgPlanet=Lua
            break;
        case 'Netuno':
            imgPlanet=Netuno
            break;
        case 'Plutão':
            imgPlanet=Plutao
            break;
        case 'Saturno':
            imgPlanet=Saturno
            break;
        case 'Urânio':
            imgPlanet=Uranio
            break;
        case 'Vênus':
            imgPlanet=Venus
            break;
        default:
            break;
    }

    return (
        <CardDiv>
            <Title>{props.name}</Title>
            <Info>{props.description}</Info>
            
            <ImgLine>
                <div>
                    <Info><b>Planeta:</b> {props.planet}</Info>
                    <Info><b>Data:</b> {props.date}</Info>
                    <Info><b>Duração:</b> {props.durationInDays} dias</Info>
                </div>
                <div>
                    <img src={imgPlanet} />
                </div>
            </ImgLine>
            
            <SubscriptionButton>
                <Button variant="contained" color="primary" onClick={props.selectTrip}>Inscrever-se</Button>
            </SubscriptionButton>
        </CardDiv>
    )

}

export default Card