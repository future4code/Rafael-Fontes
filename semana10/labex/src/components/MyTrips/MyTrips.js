import React from 'react'
import Header from '../Header/Header'

const MyTrips = (props) => {
    
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

            MyTrips
        </div>
    )
}

export default MyTrips