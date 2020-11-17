import React from 'react'
import Header from '../Header/Header'

const ErrorPage = (props) => {
    
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

            ErrorPage
        </div>
    )
}

export default ErrorPage