import React from 'react'
import Header from '../Header/Header'
import Globe from '../../img/globe-45.gif'
import { useHistory } from 'react-router-dom'
import { MainDiv, Message } from './styles'

const ErrorPage = (props) => {
    const history = useHistory()
    const onClickButton = () => {
        history.push('/')
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
            <MainDiv>
            <img src={Globe}></img>
            <Message>Esta página não existe</Message>
            <button onClick={onClickButton}>Voltar ao Início</button>
            </MainDiv>

        </div>
    )
}

export default ErrorPage