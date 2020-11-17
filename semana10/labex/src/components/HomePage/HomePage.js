import React from 'react'
import Header from '../Header/Header'

const HomePage = (props) => {

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

            HomePage
        </div>
    )
}

export default HomePage