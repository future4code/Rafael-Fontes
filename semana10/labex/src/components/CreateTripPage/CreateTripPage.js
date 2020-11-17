import React from 'react'
import Header from '../Header/Header'

const CreateTripPage = (props) => {
    
    return (
        <div>
            <Header
                onClickHome={props.onClickHome}
                onClickAdm={props.onClickAdm}
                onClickForm={props.onClickForm}
                onClickContact={props.onClickContact}
                onClickList={props.onClickList}
                onClickCreate={props.onClickCreate}
                onClickTrip={props.onClickTrip}
            />

            CreateTripPage
        </div>
    )
}

export default CreateTripPage