import React from 'react'
import Header from '../Header/Header'

const ApplicationFormPage = (props) => {

    const onClickSend = () => {
        
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
        
        <form action="">
            <div>
                <label>Nome:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Idade:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Profissão:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>País:</label>
                <input type="text"></input>
            </div>                        
            <div>
                <label>Mensagem:</label>
                <textarea rows="1" cols="50"></textarea>
            </div> 
        </form>
        <button onClick={onClickSend}>Enviar</button>
            ApplicationFormPage
        </div>
    )
}

export default ApplicationFormPage